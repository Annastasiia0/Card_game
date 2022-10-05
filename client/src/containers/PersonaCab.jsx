import React, { useEffect, useState } from 'react';
// import { Button, Card, Image, Textarea, Spacer, Input, Text, Select, Divider } from '@geist-ui/core';
// import styled from 'styled-components';
import { useSelector } from 'react-redux';
const axios = require('axios').default;

// const FlexContainer = styled.div`
// //display: flex;
// //justify-content: space-around;
// `;
//
// const Center = styled.form`
// //margin: auto;
// //width: 50%;
// `;
//
// const TextContainer = styled.div`
// //margin: auto;
// //width: 50%;
// //text-align: center;
// `;
//
// const ImageCropper = styled.div`
// //margin: 3% 0 0 3%;
// width: 300px;
// height: 300px;
// //position: relative;
// //overflow: hidden;
// border-radius: 50%;
// `;
//
// const StyledImage = styled.img`
// //display: inline;
// //margin: 0 auto;
// //height: 100%;
// //width: auto;
// `;


export default function PersonaCab() {


    const [profilePhoto, setProfilePhoto] = useState('')
    const [img, setImg] = useState(null)
    const user = useSelector(state => state.auth.user)

    const [saveButton, setSaveButton] = useState(false)
    function showSaveButton() {
        setSaveButton(true)
    }
    const sendFile = async (e) => {
        try {
            const data = new FormData()
            data.append('profilePhoto', img)
            const res = await axios.put(`/${user.id}/photo`, data, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(data => setProfilePhoto(data.data))
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <div className="register-container">
                <div className="card">
                    <div className="card-image">
                    </div>
                        <span>Мой профиль</span>

                        <div className="input">
                            <img src={user?.photo} style={{width:'200px',height:'200px',borderRadius:'50%',margin:'auto auto'}} alt='123'/>
                            <input
                                type="text"
                                onChange={showSaveButton}
                                defaultValue={user?.name}
                                className="input-field"
                                name="name"
                                autoComplete="off"
                                required
                            />
                            <label className="input-label">Name</label>
                        </div>
                        <div className="input">
                            <input
                                type="file"
                                className="input-field"
                                name="file"
                                autoComplete="off"
                                required
                                onChange={(e) => setImg(e.target.files[0])}
                            />
                            <button onClick={sendFile} className="action-button">
                                Изменить
                            </button>
                            <label className="input-label">Photo</label>
                        </div>
                        <div className="action">
                        </div>
                </div>
            </div>
            { saveButton &&
                <button >Сохранить</button>
            }
            </>
        // {/*<form onSubmit={sendFile}>*/}
        // {/*    <label htmlFor="inputPhoto">Photo:</label>*/}
        // {/*    <input name='photo' type="file" onChange={(e) => setImg(e.target.files[0])} id="inputPhoto" defaultValue={user.photo} />*/}
        // {/*    <label htmlFor="inputText">Name:</label>*/}
        // {/*    <input name='name' type="text" id="inputText" defaultValue={user.name} />*/}
        // {/*    <button type='submit'>Изменить</button>*/}
        // {/*</form>*/}

        // <Center>
        //     <Card shadow width="50rem" height="50rem">
        //         <FlexContainer>
        //             <div style={{
        //                 display: 'flex',
        //                 flexDirection: 'column',
        //                 alignItems: 'center'
        //             }}>
        //                 <ImageCropper>
        //                     <StyledImage src={profilePhoto || user?.photo}></StyledImage>
        //                 </ImageCropper>
        //                 {/*<Spacer></Spacer>*/}
        //                 <div>
        //                     <Input htmlType='file' onChange={(e) => setImg(e.target.files[0])}></Input>
        //                     <Button onClick={sendFile}>Изменить</Button>
        //                 </div>
        //                 {/*<Spacer></Spacer>*/}
        //             </div>
        //             <TextContainer>
        //                 <Text h4 my={0}>Мой профиль</Text>
        //                 <Divider my={4}/>
        //                 <Input onChange={showSaveButton} initialValue={user.name} /><p>{user.name}</p>
        //             </TextContainer>
        //         </FlexContainer>
        //         <Spacer w={.5} inline /><p></p>
        //         { saveButton &&
        //             <Button >Сохранить</Button>
        //         }
        //     </Card>
        // </Center>
    );
}




