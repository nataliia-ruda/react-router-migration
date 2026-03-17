import hljs from 'highlight.js/lib/core';
import kotlin from 'highlight.js/lib/languages/kotlin';

hljs.registerLanguage('kotlin', kotlin);

export function highlightKotlin(code: string): string {
    return hljs.highlight(code, { language: 'kotlin' }).value;
}