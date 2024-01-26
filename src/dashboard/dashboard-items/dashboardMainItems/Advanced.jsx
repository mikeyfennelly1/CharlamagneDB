import { useContext } from "react";
import DashboardContext from "../dashboardContext";

const AdvancedVisibleClasses = "text-white visible visible text-white min-w-[1350px] max-w-[1350px] min-h-[200px] inline-block px-[200px] py-[20px] font-[TT-Autonomous-Mono-Reg]"
const AdvancedInvisibleClasses = "text-white hidden"

const Advanced = () => {
    const [dashboardContext] = useContext(DashboardContext)
    return (
        <>
            <div className={(dashboardContext === "Advanced" ? AdvancedVisibleClasses : AdvancedInvisibleClasses)}>
            <h2 className="">Advanced</h2>
                <div>
                    <h3>LDAP Authentication</h3>
                    <p>LDAP authentication allows database users to log into dedicated (M10 or higher) Atlas clusters using credentials that are verified by a LDAP server you control. Database users can be configured in the project-level Access Manager.</p>
                    <p>Turning on this feature will increase your daily cluster pricing. Read more.</p>
                </div>
                <div>
                    <h3>LDAP Authorization (LDAP Authentication required)</h3>
                    <p>LDAP authorization allows database users to be managed at LDAP group level. LDAP groups can be managed in the project-level Access Manager and be assigned a specific set of privileges. All database users in an LDAP group can then authenticate to dedicated (M10 or higher) Atlas clusters with those privileges.</p>
                    <p>Turning on this feature will increase your daily cluster pricing. Read more.</p>
                </div>
                <div>
                    <h3>Encryption at Rest using your Key Management</h3>
                    <p>Provide your AWS Key Management Service (AWS KMS), Azure Key Vault, or Google Cloud KMS encryption key details to enable Encryption at Rest with the WiredTiger™ Encrypted Storage Engine.</p>
                    <p>Newly deployed clusters will use your encryption key by default. Pre-existing clusters will not use your encryption key until you enable them individually. This feature will increase your daily cluster pricing. Read more.</p>
                </div>
                <div>
                    <h3>Database Auditing</h3>
                    <p>Database auditing allows you to customize log downloads with the users, groups, and actions you want to audit.</p>
                    <p>Turning on this feature will increase your daily cluster pricing. Read more.</p>
                </div>
                <div>
                    <h3>Push-Based Log Export</h3>
                    <p>Allows you to configure Atlas to automatically export database logs to an AWS S3 bucket.</p>
                    <p>Exporting logs may incur data transfer costs. Read more.</p>
                </div>
                <div>
                    <h3>Self-managed X.509 Authentication</h3>
                    <p>With self-managed X.509 authentication, you can configure Atlas to trust your public key infrastructure and issue certificates to users yourself. Read more</p>
                </div>
            </div>
        </>
    );
}
 
export default Advanced;