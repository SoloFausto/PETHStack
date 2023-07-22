import { helloWorld } from "../views/component/component1";
import { blankPage } from "../views/page/blankPage";
import * as elements from 'typed-html';

const bodyInnerHTML = 
<div class="text-xl font-medium leading-6 space-y-4" >
    {helloWorld}
    <p class="text-blue-600/100">The quick brown fox...</p>
    <p class="text-blue-600/75">The quick brown fox...</p>
    <p class="text-blue-600/50">The quick brown fox...</p>
    <p class="text-blue-600/25">The quick brown fox...</p>
    <p class="text-blue-600/0">The quick brown fox...</p>
</div>



export const indexRoute = blankPage(bodyInnerHTML,"works");

