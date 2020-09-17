import React, {useRef} from 'react';
import {FileInput} from "./buttonStyles";
import {
    Input,
    InputGroup,
    InputLeftElement,
    Icon,
    Button
} from "@chakra-ui/core";


const InputFileBtn = () => {

    const hiddenFileInput = useRef(null);

    const handleClick = event => {
        hiddenFileInput.current.click();
    }

    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        props.handleFile(fileUploaded);
    };
    return (

        <FileInput>
            <InputGroup>
                <InputLeftElement children={<Icon name="attachment" color="blue.300"/>}/>
                <Button w="100%" color="blue.500" onClick={handleClick}>
                    Upload a file
                </Button>
                <Input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={handleChange}
                    style={{display: 'none'}}/>
            </InputGroup>
        </FileInput>

    );
};

export default InputFileBtn;