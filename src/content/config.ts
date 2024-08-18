import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		pubDate: z.coerce.date(), // Transform string to Date object
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		postImage: z.string().optional(),
	}),
});

export const collections = { blog };
