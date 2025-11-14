import {
    Html, Head, Font, Preview, Heading, Row, Section, Text, Button,
} from '@react-email/components';

interface VerificationEmailProps {
    username: string;
    otp: string;
}

export default function VerificationEmail({ username, otp }: VerificationEmailProps) {
    return (
        <Html lang="en" dir="ltr">
            <Head>
                <title>Verification Code</title>
                <Font
                    fontFamily="Roboto"
                    fallbackFontFamily="Verdana"
                    webFont={{
                        url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxM.woff2',
                        format: 'woff2',
                    }}
                    fontWeight={400}
                    fontStyle="normal"
                />
            </Head>
            <Preview>Here&apos;s your Verification Code: {otp}</Preview>
            <Section>
                <Row>
                    <Heading as="h2" >
                        Hello {username},
                    </Heading>
                </Row>
                <Row>
                    <Text>
                        We received a request to verify your account. Please use the following One-Time Password (OTP) to complete the verification process.
                    </Text>
                </Row>
                <Row>
                    <Text>
                        {otp}
                    </Text>
                </Row>
                <Row>
                    <Text>
                        If you did not request this, please ignore this email.
                    </Text>
                </Row>
            </Section>
        </Html>
    );
};