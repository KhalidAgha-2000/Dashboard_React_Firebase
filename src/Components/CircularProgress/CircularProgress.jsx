import './CircularProgress.css'

const CircularProgress = ({ value, offset, color }) => {
    return (
        <div className='circular--progress'>
            <div className="details">
                <h1>{value}</h1>
                <p>%</p>
            </div>

            <svg>
                <circle className='svg--circle--gray' cx="55" cy="55" r="50" />
                <circle
                    className='svg--circle' cx="55" cy="55" r="50"
                    style={{ "--clr": color, "--p": offset }}
                />
            </svg>
        </div>
    )
}

export default CircularProgress