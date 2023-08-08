import React, { useState } from 'react'

export default function About() {
    const[myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor:'White'
    })

    const[btntext, setbtntext] = useState('Enable Dark mode')
    const toggleStyle =()=>{
        if(myStyle.color === 'black'){
            setMyStyle({
                    color:'White',
                    backgroundColor:'black'
                           
            })
            setbtntext('Enable Light mode');
        }
        else{
                setMyStyle({
                    
                        color:'black',
                        backgroundColor:'White',
                    border:'1px solid white'
                })
                setbtntext('Enable Dark mode');
            }
    }

    return (
        
        <div className='container' style={myStyle}>
            <h1 className='my-3'>About Us</h1> 
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header">                       
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                           Analyze your text
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtiles gives you a way to anlyze text quickly and efficientiy be it word count charachter count or  .
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Free to used
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Browser compatible
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                        This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="contrnar my-3" >
                <button onClick={toggleStyle} type="button" className="btn btn-dark">{btntext}</button>
            </div> */}

        </div>
    )
}
