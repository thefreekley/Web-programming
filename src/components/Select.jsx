import React from "react";


function Select({data,id,func,value,width}) {


    const handleChange = ({target:value}) => {
        func && func(value.value)
    }
    function optionWithOutSelected(selected) {
        var new_list = data.filter(item => item!= selected);
        return new_list;
    }

    return (

            <label>
                {/*{console.log(optionWithOutSelected(value))}*/}
                <select
                        onChange={handleChange} className="button" id={id}
                        style={{
                            color:"grey",
                            fontSize:"20px",
                            width:`${width}`
                        }}
                >
                    <option selected={value}> {value} </option>
                    { optionWithOutSelected(value).map(item => (
                        <option
                            key={item}
                            value={item}>
                            { item }
                        </option>
                    ))}
                </select>
            </label>
    );
}

export default Select;