'use server';

/**
 * @fileOverview A flow that checks uploaded property documents for missing information and discrepancies.
 *
 * - automatedDocumentCheck - A function that handles the document check process.
 * - AutomatedDocumentCheckInput - The input type for the automatedDocumentCheck function.
 * - AutomatedDocumentCheckOutput - The return type for the automatedDocumentCheck function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomatedDocumentCheckInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "A scanned image of a property document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type AutomatedDocumentCheckInput = z.infer<typeof AutomatedDocumentCheckInputSchema>;

const AutomatedDocumentCheckOutputSchema = z.object({
  missingInformation: z
    .array(z.string())
    .describe('A list of missing information in the document.'),
  potentialDiscrepancies: z
    .array(z.string())
    .describe('A list of potential discrepancies found in the document.'),
});
export type AutomatedDocumentCheckOutput = z.infer<typeof AutomatedDocumentCheckOutputSchema>;

export async function automatedDocumentCheck(input: AutomatedDocumentCheckInput): Promise<AutomatedDocumentCheckOutput> {
  return automatedDocumentCheckFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automatedDocumentCheckPrompt',
  input: {schema: AutomatedDocumentCheckInputSchema},
  output: {schema: AutomatedDocumentCheckOutputSchema},
  prompt: `You are an expert in cadastral document review.

You will be provided with a scanned image of a property document. Your task is to identify any missing information and potential discrepancies based on cadastral standards.

Analyze the document and provide a list of missing information and a list of potential discrepancies.

Document: {{media url=documentDataUri}}

Missing Information:
{{output missingInformation}}

Potential Discrepancies:
{{output potentialDiscrepancies}}`,
});

const automatedDocumentCheckFlow = ai.defineFlow(
  {
    name: 'automatedDocumentCheckFlow',
    inputSchema: AutomatedDocumentCheckInputSchema,
    outputSchema: AutomatedDocumentCheckOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
