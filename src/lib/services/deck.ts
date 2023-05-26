import type { CardObj } from '$lib/schemas/CardSchema';

export async function newDeck(): Promise<string> {
	const response = await fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1');
	const data = await response.json();

	if (!data.success) throw new Error('Error creating new deck');

	return data.deck_id;
}

export async function drawCard(deckId: string, count = 1): Promise<CardObj[]> {
	const response = await fetch(
		`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${count}`
	);
	const data = await response.json();

	if (!data.success) throw new Error('Error drawing card');

	return data.cards;
}
