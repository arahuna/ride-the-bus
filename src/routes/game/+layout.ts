import { newDeck, drawCard } from '$lib/services/deck';
import type { LayoutData } from '../$types';

export const load = (async () => {
	const deckId = await newDeck();
	const cards = await drawCard(deckId, 3);

	return {
		cards
	};
}) satisfies LayoutData;
