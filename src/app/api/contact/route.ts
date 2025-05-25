import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // ★最小限のバリデーション
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Missing fields' },
        { status: 400 }
      );
    }

    // 環境変数のチェック
    if (
      !process.env.GMAIL_USER ||
      !process.env.GMAIL_APP_PASS ||
      !process.env.MAIL_TO
    ) {
      console.error('環境変数が正しく設定されていません');
      return NextResponse.json(
        { ok: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Nodemailer – Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_TO,
      subject: `🐟お問い合わせ: ${name}`,
      text: `${message}\n\n---\n送信者: ${name} <${email}>`,
    };

    // メール送信
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    console.error('メール送信エラー:', err.message || err);
    return NextResponse.json(
      { ok: false, error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
