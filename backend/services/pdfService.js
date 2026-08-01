import fs from "fs/promises";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf.mjs";

const extractTextFromPDF = async (filePath) => {
  try {
    const buffer = await fs.readFile(filePath);

    const pdf = await pdfjsLib.getDocument({
      data: new Uint8Array(buffer),
    }).promise;

    let text = "";

    for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
      const page = await pdf.getPage(pageNum);

      const content = await page.getTextContent();

      const pageText = content.items
        .map((item) => item.str)
        .join(" ");

      text += pageText + "\n";
    }
    const cleanedText = text
        .replace(/\r/g, "")
        .replace(/\n{2,}/g, "\n")
        .replace(/\t/g, " ")
        .trim();

    console.log("Extracted Text:");
    console.log(cleanedText);

    return cleanedText;

  } catch (error) {
    console.error("PDF Parse Error:", error);
    throw new Error("Failed to parse PDF.");
  }
};

export default extractTextFromPDF;