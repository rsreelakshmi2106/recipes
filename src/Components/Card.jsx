import React from 'react'
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';

function Card({ reci }) {
    return (
        <div>
            <div className="row">
                {reci.map(r => (
                    <div className="col mx-auto mb-5">
                        <MDBCard style={{ width: '380px' }}>
                            <MDBRow className='g-0'>
                                <MDBCol md='4'>
                                    <MDBCardImage src={r.image} alt='...' fluid />
                                </MDBCol>
                                <MDBCol md='8'>
                                    <MDBCardBody>
                                        <MDBCardTitle><b style={{fontFamily:'Madimi One'}}>{r.name}</b></MDBCardTitle>
                                        <MDBCardText>
                                        <b style={{fontFamily:'Madimi One'}}>Cuisine</b> : {r.cuisine}
                                        </MDBCardText>
                                        <MDBCardText>
                                        <b style={{fontFamily:'Madimi One'}}>Ingredients</b> : {r.ingredients}
                                        </MDBCardText>
                                        <MDBCardText>
                                        <b style={{fontFamily:'Madimi One'}}>Instructions</b> : {r.instructions}
                                        </MDBCardText>
                                        <MDBCardText>
                                            <small className='text-muted'><b>Difficulty</b>: {r.difficulty} &nbsp;&nbsp;&nbsp; <b>Servings</b> : {r.servings}</small>
                                        </MDBCardText>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Card