function sendEmail(): void {
    let emailSubject = makeEmailSubject();
    let emailContent = generateHtmlContent();

    if (BODY.getListItems().length == 0 || RECIPIENT_EMAILS.length == 0) return;

    Logger.log(emailContent);

    MailApp.sendEmail(RECIPIENT_EMAILS.join(","), emailSubject, emailContent, {
        htmlBody: emailContent,
        cc: CC_EMAILS.join(",") || "",
        bcc: BCC_EMAILS.join(",") || "",
        name: SENDER_DISPLAY_NAME || ""
    });

    return;
}

function makeEmailSubject(): string {
    return fillTemplateString(EMAIL_SUBJECT_TEMPLATE, createDateInfo(new Date()));
}

function generateHtmlContent(): string {
    return HtmlService.createTemplateFromFile("_emailTemplate")
        .evaluate()
        .getContent();
}
