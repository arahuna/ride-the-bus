import { z } from 'zod';

const CardSchema = z
	.object({
		code: z.string(),
		image: z.string(),
		images: z
			.object({
				svg: z.string(),
				png: z.string()
			})
			.strict(),
		value: z.string(),
		suit: z.enum(['SPADES', 'HEARTS', 'DIAMONDS', 'CLUBS'])
	})
	.strict();

export type Card = z.infer<typeof CardSchema>;

export default CardSchema;
