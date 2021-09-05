import React, {useState, useEffect} from 'react'
import {SearchContainer,
        SearchWrap,
        SearchH1,
        InputLattitude,
        InputLongitude,
        SearchMenu,
        SearchItems,
        BtnWrapp,
        Button } from './SearchElements'

const SearchComponent = ({ChangeGeography}) => {

    const [lat, setLat] = useState(33.971588)
    const [lng, setLng] = useState(-6.849813)
    
    // useEffect(() => {
        
    //     ChangeGeography(lat,lng)
        
    // }, [lat, lng])
    const submit = () =>{

        ChangeGeography(lat,lng)
    }
    

    return (
            <SearchContainer >
                <SearchWrap >
                    
                    <SearchH1>Please enter latitude and longitude </SearchH1>

                    <SearchMenu>

                        <SearchItems>
                            <InputLattitude /* defaultValue="Lattitude" */ placeholder="Lattitude" onChange={(e) => setLat(e.target.value)} />
                        </SearchItems>

                        <SearchItems>
                            <InputLongitude /* defaultValue="Longtitude" */ placeholder="Longtitude" onChange={(e) => setLng(e.target.value)}  />
                        </SearchItems>

                        <BtnWrapp>
                            <Button onClick={submit}>Button</Button>
                        </BtnWrapp>

                    </SearchMenu>

                </SearchWrap>
            </SearchContainer>
    )
}

export default SearchComponent
