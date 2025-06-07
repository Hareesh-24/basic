export default function Hareesh() {
  return (
    <div>
      <h1>Smart Certificate Generator & Verification System</h1>
      <p>
        The Smart Certificate Generator & Verification System is a web-based application built using Python Django as the backend framework. 
        It allows institutions to generate digital certificates for interns and store their details securely.
        When a certificate is created, a unique cryptographic hash of its content is generated and stored on the Ethereum blockchain using a smart contract, ensuring the certificate is tamper-proof and permanently recorded. 
        All relevant metadata—such as student name, certificate ID, and issue date—is stored locally in a lightweight SQLite database for quick access and admin management.
        Each certificate is linked to a unique ID or QR code, which users can scan or enter to verify the certificate’s authenticity.
        During verification, the system rehashes the certificate and compares it with the hash stored on the blockchain. 
        If they match, the certificate is validated successfully.
        This solution ensures secure, verifiable, and immutable digital certification using the power of blockchain.
      </p>
    </div>
  );
}
