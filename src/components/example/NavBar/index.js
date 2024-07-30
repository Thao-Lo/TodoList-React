export function NavBar(){
    const styles = {
        ul: {
            display: "flex",
            justifyContent: "space-around"
        }
    }
    return (
        <ul style={styles.ul}>
            <li>Home</li>
            <li>Category</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Job</li>
        </ul>
    )
}