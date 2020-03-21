// Any constant defined with an underscore has been censored, the original data is in a different file not uploaded publicly

const _RECIPIENT_EMAILS: string[] = ["example@email.com", "example2@email.com"];
const _CC_EMAILS: string[] = ["example@email.com", "example2@email.com"];
const _BCC_EMAILS: string[] = ["example@email.com", "example2@email.com"];
const _SENDER_DISPLAY_NAME: string = "IceDynamix";

// Links used in the email template
const _TROBLECODINGS_LINK: string = "https://github.com/Troblecodings";
const _SPRINT_LOG_LINK: string = "https://docs.google.com/spreadsheets/d/***";
const _BURNDOWN_LINK: string = "https://docs.google.com/spreadsheets/d/***";

const _EMAIL_SUBJECT_TEMPLATE: string = "Example Email Subject - $year-$month-$day";

const DOCUMENT = DocumentApp.getActiveDocument();
const BODY = DOCUMENT.getBody();
