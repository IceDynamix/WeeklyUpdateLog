/**
 * Replaces values in strings with $labels
 * @param template String template to fill with information with $label placeholders
 * @param info Dictionary, where each $key in the template will be replaced with the value
 */
function fillTemplateString(template: string, info: object) {
    let keys: string[] = Object.keys(info).sort((a: string, b: string) => b.length - a.length);
    for (const key of keys) template = template.replace(new RegExp("\\$" + key, "g"), info[key]);
    return template;
}

/**
 * Creates a date object for use in the fillTemplateString() function
 * @param date
 */
function createDateInfo(date: Date) {
    return {
        year: padLeft(date.getFullYear(), 4),
        month: padLeft(date.getMonth() + 1), // January = 0
        day: padLeft(date.getDate()),
        hour: padLeft(date.getHours()),
        minute: padLeft(date.getMinutes()),
        second: padLeft(date.getSeconds()),
        millisecond: padLeft(date.getMilliseconds())
    };
}

/**
 * Merges multiple objects, with the first object having the most priority
 */
function mergeObjects() {
    if (arguments.length == 0) return {};
    if (arguments.length == 1) return arguments[0];

    let merged: object = {};
    for (const obj of arguments) merged = { ...obj, ...merged };

    return merged;
}

/**
 * Adds a character to the left of a string until it has reached a specified length
 * @param n Number to pad
 * @param width Length to pad to, defaults to 2
 * @param padString String to pad with, defaults to "0"
 */
function padLeft(n: number, width: number = 2, padString: string = "0") {
    let str = n.toString();
    return width > str.length ? (padString.repeat(width) + str).slice(-width) : str;
}
