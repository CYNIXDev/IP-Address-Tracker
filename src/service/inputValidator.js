
function isIPAddress(input) {
    // Regular expression for IP address validation
    var ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipPattern.test(input);
}

function isDomain(input) {
    // Regular expression for domain name validation
    var domainPattern = /^(?:[-A-Za-z0-9]+\.)+[A-Za-z]{2,6}$/;
    return domainPattern.test(input);
}

export default function inputValidator(userInput) {
    let data = {}
    if (isIPAddress(userInput)) {
        data.log = "This is an IP address."
        data.result = true
        data.type = 'ip'
    } else if (isDomain(userInput)) {
        // Split the domain into its components
        let parts = userInput.split('.');
        console.log(parts)
        // Check if there are enough parts to have a subdomain
        if (parts.length > 2) {
            data.log = "Please do not input a subdomain."
            data.result = false
        } else {
            data.log = "This is a Domain"
            data.result = true
            data.type = 'domain'
        }
    } else {
        data.log = "Please input only IPv4 addresses or domain names."
        data.result = false
    }
    return data
}