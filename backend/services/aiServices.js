import ai from "../config/gemini.js";

const explainMedicalReport = async (reportText) => {
  try {
    const prompt = `
You are a professional medical assistant.

Analyze the following medical report.

Write your answer in Markdown.

Follow this format exactly:

# Medical Report Summary

Brief summary of the report.

# Test Results

Explain every important test in simple English.

# Recommendations

Give healthy lifestyle recommendations.

# Disclaimer

Mention that this explanation is AI-generated and is not a medical diagnosis.

Medical Report:

${reportText}
`;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
    });

    return response.text;

  } catch (error) {

    console.log(error);

    throw new Error("Failed to analyze report.");

  }
};

export default explainMedicalReport;