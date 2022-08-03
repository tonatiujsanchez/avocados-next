

export const Alert = ({ title, subtitle }) => {
    return (
        <div className="w-full bg-amber-50 border border-amber-700 px-5 py-4 rounded-md">
            <h3 className="font-bold text-amber-900">{ title }</h3>
            <p className="text-amber-900">{ subtitle }</p>
        </div>
    )
}
