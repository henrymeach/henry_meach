import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';

export async function POST(request: NextRequest) {
    // get name, email, and message from Contact Form when user submits
    const { name, email, message } = await request.json();

    const contactEmail = process.env.CONTACT_EMAIL;
    const contactPass = process.env.CONTACT_PASSWORD;

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: contactEmail,
            pass: contactPass,
        },
    });

    // determine who email is sent from, to, if the user is cc'd, the subject, and message
    const mailOptions: Mail.Options = {
        from: contactEmail,
        to: contactEmail,
        cc: email,
        subject: `Message from ${name} (${email})`,
        text: message,
    }

    // construct the email, and determine what happens if successful or failed
    const sendMailPromise = () => {
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve('Email sent');
                } else {
                    reject(err.message);
                }
            });
        });
    };

    // attempt to send the email
    try {
        await sendMailPromise();
        return NextResponse.json({ message: 'Email sent' });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}