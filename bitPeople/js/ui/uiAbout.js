const container = document.querySelector(".root");

export const renderAbout = () => {

    const about = document.createElement("div");
    container.textContent = "";
    about.innerHTML = `
        <h1 class="center"> ABOUT </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a tortor vel quam feugiat feugiat. Proin eu nulla vitae ante dignissim vulputate id a felis. Etiam vestibulum laoreet justo et elementum. Aliquam at posuere lacus, eu interdum mi. Quisque purus nibh, dapibus a nunc quis, pellentesque ultrices magna. Etiam lobortis augue libero, consectetur aliquet eros egestas eget. Cras lectus velit, volutpat non justo ut, eleifend imperdiet lacus. Donec dapibus lectus turpis, in eleifend dolor feugiat vitae. Integer eget blandit metus, quis maximus leo. Integer interdum luctus nunc, ac venenatis tellus tincidunt id. Quisque diam justo, tincidunt fringilla ex ut, venenatis ullamcorper nisi. Nulla vel sollicitudin erat. Praesent vitae quam facilisis, ullamcorper lectus non, feugiat ante. Integer tellus arcu, semper sit amet eros ullamcorper, imperdiet finibus augue. Quisque in efficitur enim, ut iaculis magna. Donec nisi felis, auctor id molestie ut, aliquam eu dolor.

            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi vitae nisl feugiat, pellentesque dui in, tincidunt arcu. Cras ac nisi tempus, viverra ex sit amet, sagittis enim. Nam ut rutrum justo. Aenean tincidunt nec odio sed tempor. Ut quis metus ornare, vulputate ante in, faucibus velit. Praesent ultrices semper est, eu lobortis erat scelerisque id. Suspendisse potenti. In hac habitasse platea dictumst. Phasellus convallis nunc arcu, eu placerat erat tristique eu. In nec dolor a odio finibus gravida. Integer luctus porta ante eu tincidunt. Cras euismod posuere sapien, quis commodo elit hendrerit in. Sed lorem tortor, egestas eu magna ac, molestie porttitor tortor.
        </p>
        <h1 class="center"> What we do </h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a tortor vel quam feugiat feugiat. Proin eu nulla vitae ante dignissim vulputate id a felis. Etiam vestibulum laoreet justo et elementum. Aliquam at posuere lacus, eu interdum mi. Quisque purus nibh, dapibus a nunc quis, pellentesque ultrices magna. Etiam lobortis augue libero, consectetur aliquet eros egestas eget. Cras lectus velit, volutpat non justo ut, eleifend imperdiet lacus. Donec dapibus lectus turpis, in eleifend dolor feugiat vitae. Integer eget blandit metus, quis maximus leo. Integer interdum luctus nunc, ac venenatis tellus tincidunt id. Quisque diam justo, tincidunt fringilla ex ut, venenatis ullamcorper nisi. Nulla vel sollicitudin erat. Praesent vitae quam facilisis, ullamcorper lectus non, feugiat ante. Integer tellus arcu, semper sit amet eros ullamcorper, imperdiet finibus augue. Quisque in efficitur enim, ut iaculis magna. Donec nisi felis, auctor id molestie ut, aliquam eu dolor.

            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi vitae nisl feugiat, pellentesque dui in, tincidunt arcu. Cras ac nisi tempus, viverra ex sit amet, sagittis enim. Nam ut rutrum justo. Aenean tincidunt nec odio sed tempor. Ut quis metus ornare, vulputate ante in, faucibus velit. Praesent ultrices semper est, eu lobortis erat scelerisque id. Suspendisse potenti. In hac habitasse platea dictumst. Phasellus convallis nunc arcu, eu placerat erat tristique eu. In nec dolor a odio finibus gravida.
        </p>
    `;
    container.appendChild(about);
}