import React from 'react'
import { connect } from "react-redux"
import { addTodoDummy } from '../actions'


const AddTodoDummy = ({ dispatch}) => {
    let input

    return  (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                    return
                }
                dispatch(addTodoDummy(input.value))
                input.value = ''
            }}>
                <input ref={node => input = node} ></input>
                <button type="submit">
                    Add Todo Dummy
                </button>
            </form>
        </div>
    )
}

export default connect()(AddTodoDummy)