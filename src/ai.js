import { HfInference } from '@huggingface/inference';

const getHfClient = () => {
    const token = import.meta.env.VITE_HF_TOKEN;
    
    if (!token) {
        throw new Error(
            'Hugging Face API token is missing. Please add VITE_HF_TOKEN to your .env file.'
        );
    }
    
    return new HfInference(token);
};

const SYSTEM_PROMPT = `
You are an expert culinary assistant that receives a list of ingredients and suggests creative, delicious recipes. 

Guidelines:
- Use some or all of the provided ingredients
- You may suggest additional common ingredients if needed (but keep extras minimal)
- Provide clear, step-by-step instructions
- Include prep time, cook time, and servings
- Format your response in clean markdown with proper sections
- Make the recipe practical and easy to follow
`;

export async function getRecipeFromMistral(ingredientsArr) {
    if (!ingredientsArr || ingredientsArr.length === 0) {
        throw new Error('Please provide at least one ingredient');
    }

    const ingredientsString = ingredientsArr
        .filter(ingredient => ingredient.trim() !== '')
        .join(", ");

    const hf = getHfClient();
    
    const models = [
        "mistralai/Mistral-7B-Instruct-v0.2",
        "mistralai/Mistral-7B-Instruct-v0.1",
        "HuggingFaceH4/zephyr-7b-beta",
        "meta-llama/Llama-2-7b-chat-hf"
    ];

    const prompt = `${SYSTEM_PROMPT}\n\nUser: I have the following ingredients: ${ingredientsString}. Please suggest a delicious recipe I can make!\n\nAssistant:`;

    for (let i = 0; i < models.length; i++) {
        try {
            console.log(`Trying model: ${models[i]}`);
            
            try {
                const response = await hf.chatCompletion({
                    model: models[i],
                    messages: [
                        { role: "system", content: SYSTEM_PROMPT },
                        { 
                            role: "user", 
                            content: `I have the following ingredients: ${ingredientsString}. Please suggest a delicious recipe I can make!` 
                        },
                    ],
                    max_tokens: 1024,
                    temperature: 0.7,
                });

                return response.choices[0].message.content;
            } catch (chatError) {
                console.log(`Chat completion failed for ${models[i]}, trying text generation...`);
                
                const textResponse = await hf.textGeneration({
                    model: models[i],
                    inputs: prompt,
                    parameters: {
                        max_new_tokens: 1024,
                        temperature: 0.7,
                        return_full_text: false,
                    },
                });

                return textResponse.generated_text;
            }
        } catch (err) {
            console.error(`Model ${models[i]} failed:`, err.message);
            
            if (i === models.length - 1) {
                if (err.message.includes('token') || err.message.includes('401')) {
                    throw new Error('Invalid API token. Please check your Hugging Face API key.');
                } else if (err.message.includes('rate limit') || err.message.includes('429')) {
                    throw new Error('Rate limit exceeded. Please try again in a few moments.');
                } else if (err.message.includes('network') || err.message.includes('Network')) {
                    throw new Error('Network error. Please check your internet connection.');
                }
                
                throw new Error('AI service is temporarily unavailable. Please try again later.');
            }
            
            continue;
        }
    }
}