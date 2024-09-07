function Demo() {
    return <div>
        <MyButton color="green">Approve</MyButton>
        <MyButton color="red">Reject</MyButton>
    </div>
}
type MyButtonProps = {
    color: 'red' | 'green'
    children: React.ReactNode
}
function MyButton({ color, children }: MyButtonProps) {
    return <button color={color}>
        {children}
    </button>
}
export default Demo