import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';


/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath,
    },
    slugAsParams: {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice().join(),
    },
};

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `projects/*.md`,
    contentType: 'mdx',
    fields: {
        layout: {
            type: 'string',
            required: true,
        },
        title: {
            type: 'string',
            required: true,
        },
        live_url: {
            type: 'string',

        },
        github_url: {
            type: 'string',
        },
        tags: {
            type: 'list',
            of: {
                type: 'string',
            },
        },
        technologies: {
            type: 'string',
        },
        img: {
            type: 'string',
        },
        images: {
            type: 'list',
            of: {
                type: 'string',
            },
        },
        sponsor: {
            type: 'string',
        },
    },
    computedFields,
}));

export default makeSource({
    contentDirPath: 'src/content',
    documentTypes: [Project],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    // theme: 'one-dark-pro',
                    theme: 'github-dark',

                    onVisitLine(node) {
                        // Prevent lines from collapsing in `display: grid` mode, and allow empty
                        // lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: 'text', value: ' ' }];
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push('line--highlighted');
                    },
                    onVisitHighlightedWord(node) {
                        node.properties.className = ['word--highlighted'];
                    },
                },
            ],
            [
                rehypeAutolinkHeadings,
                {
                    properties: {
                        // className: ['anchor'],
                        className: ['subheading-anchor'],
                        ariaLabel: 'Link to selection'

                    },
                },
            ],
        ],
    },
});