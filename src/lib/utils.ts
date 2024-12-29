export function trimContent(content: string): string {
    return content.replace(/^\s+|\s+$/g, "");
}