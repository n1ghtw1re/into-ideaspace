import { Book, Part, Chapter, Page } from '../types/book';

export async function loadBook(): Promise<Book> {
  const book: Book = {
    title: "Into Ideaspace",
    author: "The N1ghtw1re Collective",
    parts: []
  };

  // Load parts and chapters
  const parts: Part[] = [
    {
      title: "Introduction",
      path: "introduction",
      chapters: [
        {
          title: "Overview of Ideaspace ",
          path: "chapter1",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/introduction/chapter1/page_001.md?raw').then(m => m.default).catch(error => {
                console.error("Error loading page:", '../data/book/introduction/chapter1/page_001.md');
                return ''; // Or some other fallback content
              })
            }
          ]
        }
      ]
    },
    {
      title: "The Nature of Ideaspace**",
      path: "part1",
      chapters: [
        {
          title: "Understanding Ideaspace",
          path: "chapter1",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part1/chapter1/page_001.md?raw').then(m => m.default).catch(error => {
                console.error("Error loading page:", '../data/book/part1/chapter1/page_001.md');
                return '';
              })
            }
          ]
        },
        {
          title: "Historical Perspectives on Shared Ideas",
          path: "chapter2",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part1/chapter2/page_001.md?raw').then(m => m.default).catch(error => {
                console.error("Error loading page:", '../data/book/part1/chapter2/page_001.md');
                return '';
              })
            }
          ]
        }
      ]
    },
    {
      title: "The AI Disruption**",
      path: "part3",
      chapters: [
        {
          title: "The Rise of Generative AI",
          path: "chapter5",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part3/chapter5/page_001.md?raw').then(m => m.default).catch(error => {
                console.error("Error loading page:", '../data/book/part3/chapter5/page_001.md');
                return '';
              })
            }
          ]
        },
        {
          title: "Copyright in the Age of AI",
          path: "chapter6",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part3/chapter6/page_001.md?raw').then(m => m.default).catch(error => {
                console.error("Error loading page:", '../data/book/part3/chapter6/page_001.md');
                return '';
              })
            }
          ]
        },
        {
          title: "AI and Creative Collaboration",
          path: "chapter7",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part3/chapter7/page_001.md?raw').then(m => m.default).catch(error => {
                console.error("Error loading page:", '../data/book/part3/chapter7/page_001.md');
                return '';
              })
            }
          ]
        },
        {
          title: "The Future of Intellectual Property",
          path: "chapter8",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part3/chapter8/page_001.md?raw').then(m => m.default).catch(error => {
                console.error("Error loading page:", '../data/book/part3/chapter8/page_001.md');
                return '';
              })
            }
          ]
        }
      ]
    },
    {
      title: "Integration",
      path: "part4",
      chapters: [
        {
          title: "Website Integration",
          path: "chapter9",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part4/chapter9/page_001.md?raw').then(m => m.default).catch(error => {
                console.error("Error loading page:", '../data/book/part4/chapter9/page_001.md');
                return '';
              })
            }
          ]
        },
        {
          title: "Advanced Configuration",
          path: "chapter10",
          pages: [
            {
              path: "page_001.md",
              content: await import('../data/book/part4/chapter10/page_001.md?raw').then(m => m.default).catch(error => {
                console.error("Error loading page:", '../data/book/part4/chapter10/page_001.md');
                return '';
              })
            }
          ]
        }
      ]
    }
  ];

  book.parts = parts;
  return book;
}
