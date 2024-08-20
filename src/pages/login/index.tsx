import { Form } from "react-router-dom";
import { Box, Button, PasswordInput, TextInput } from "@mantine/core";
import classes from './Login.module.css'
import Logo from "../../components/logo";
import Spacer from "../../components/spacer";
import { useState } from "react";
import { requestUserLogin } from "../../api/auth";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {
        console.log({ email, password });
        requestUserLogin(email, password);
    };

    return <Form className={classes.form} onSubmit={handleSubmit}>
        <Box className={classes.logo}><Logo /></Box>
        <TextInput label="Email" placeholder="gygax@email.com" className={classes.input} value={email} onChange={(event) => setEmail(event.target.value)}/>
        <PasswordInput label="Password" placeholder="**********" className={classes.input} value={password} onChange={(event) => setPassword(event.target.value)}/>
        <Spacer height={0.5} />
        <Button className={classes.input} type='submit'>Continue</Button>
    </Form>
};

export default LoginPage;