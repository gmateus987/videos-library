import styles from "./Footer.module.css"
import QRCode from "react-qr-code";


function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>MetFlix &copy; Desenvolvido por Mateus Gomes - 2023 </h2>
                <p>Primeiro projeto de React JS</p>
            </div>
            <QRCode
                className={styles.qrcode}
                size={80}
                bgColor="#161616"
                fgColor="#fff"
                value="https://prnt.sc/_k5AZXySw5OS"
            />
        </footer>
    );
}

export default Footer;