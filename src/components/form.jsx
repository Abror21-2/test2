import React from 'react'
import { useCheckValidation } from '../utils/useCheckValidation'

const Form = () => {

    const {
        value: nameValue,
        error: nameError,
        setValue: setNameValue
    } = useCheckValidation(value => value.length < 5);

    const {
        value: surnameValue,
        error: surnameError,
        setValue: setSurnameValue
    } = useCheckValidation(value => value.length < 10);
    
    const {
        value: emailValue,
        error: emailError,
        setValue: setEmailValue
    } = useCheckValidation(value => !value.includes('@'));

    const {
        value: passwordValue,
        error: passwordError,
        setValue: setPasswordValue
    } = useCheckValidation(value => value.length < 8 || !value.includes('*'));

    return (
        <div
            style={{ marginTop: '30px' }}
        >
            <form>
                <div style={{ marginBottom: '30px' }}>
                    <input
                        style={{ padding: '10px', width: '500px', fontSize: '22px', borderColor: nameError ? 'red' : 'black' }}
                        type="text"
                        placeholder='Name'
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                    />
                    {nameError && <p style={{ color: 'red', marginTop: 0 }}>Invalid Name</p>}
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <input
                        style={{ padding: '10px', width: '500px', fontSize: '22px', borderColor: surnameError ? 'red' : 'black' }}
                        type="text"
                        placeholder='Surname'
                        value={surnameValue}
                        onChange={(e) => setSurnameValue(e.target.value)}
                    />
                    {surnameError && <p style={{ color: 'red', marginTop: 0 }}>Invalid Name</p>}
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <input
                        style={{ padding: '10px', width: '500px', fontSize: '22px', borderColor: emailError ? 'red' : 'black' }}
                        type="text"
                        placeholder='Email'
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                    />
                    {emailError && <p style={{ color: 'red', marginTop: 0 }}>Invalid Name</p>}
                </div>

                <div style={{ marginBottom: '30px' }}>
                    <input
                        style={{ padding: '10px', width: '500px', fontSize: '22px', borderColor: passwordError ? 'red' : 'black' }}
                        type="text"
                        placeholder='Password'
                        value={passwordValue}
                        onChange={(e) => setPasswordValue(e.target.value)}
                    />
                    {passwordError && <p style={{ color: 'red', marginTop: 0 }}>Invalid Name</p>}
                </div>

            </form>
        </div>
    )
}

export default Form