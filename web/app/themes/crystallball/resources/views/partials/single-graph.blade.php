@php
$strings = array('1 PM', '2 PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM', '12AM');

if ($single_graph_content['Graph Style'] == 'Months') {
    $strings = array('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC' );
}
@endphp
<div class="hidden single-graph">
<svg class="" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 543 428" style="enable-background:new 0 0 543 428;" xml:space="preserve">
<style type="text/css">
	.single-bar{opacity:0.59;fill:none;stroke:#EDF1F5;stroke-width:1.44;stroke-linecap:square;enable-background:new    ;}
	.single-box{fill-rule:evenodd;clip-rule:evenodd;fill:#B3B6CD;}
	.single-text{font-family:'HelveticaNeue';fill:#ADB3BC;font-size:14.4px;}
	.graphst5{font-size:15.0769px;}
	.single-line{fill:none;stroke:#22386F;stroke-width:5;}
</style>
<path class="single-bar" d="M1.4,337.1h540"/>
<path class="single-bar" d="M1.4,253.1h540"/>
<path class="single-bar" d="M1.4,169.1h540"/>
<path class="single-bar" d="M1.4,85.1h540"/>
<path class="single-bar" d="M1.4,1h540"/>
<path class="single-box" style="transform-origin: bottom" d="M26.6,207.6h15v148.8h-15L26.6,207.6z"/>
<path class="single-box" style="transform-origin: bottom" d="M70.6,246h15v110.4h-15V246z"/>
<path class="single-box" style="transform-origin: bottom" d="M114.5,262.8h15v93.6h-15V262.8z"/>
<path class="single-box" style="transform-origin: bottom" d="M158.5,262.8h15v93.6h-15V262.8z"/>
<path class="single-box" style="transform-origin: bottom" d="M202.5,247.2h15v109.2h-15V247.2z"/>
<path class="single-box" style="transform-origin: bottom" d="M246.4,218.4h15v138h-15V218.4z"/>
<path class="single-box" style="transform-origin: bottom" d="M290.4,194h15v162.4h-15V194z"/>
<path class="single-box" style="transform-origin: bottom" d="M334.3,150h15v206.4h-15V150z"/>
<path class="single-box" style="transform-origin: bottom" d="M378.3,121h15v235.4h-15V121z"/>
<path class="single-box" style="transform-origin: bottom" d="M422.3,95.1h15v261.3h-15V95.1z"/>
<path class="single-box" style="transform-origin: bottom" d="M466.2,70h15v286.4h-15V70z"/>
<path class="single-box" style="transform-origin: bottom" d="M510.2,75.6h15v280.8h-15V75.6z"/>
<text transform="matrix(0.5 -0.866 0.866 0.5 18.762 421.28)" class="single-text">{{ $strings[0]}}</text>
<text transform="matrix(0.5 -0.866 0.866 0.5 62.4734 421.28)" class="single-text">{{ $strings[1]}}</text>
<text transform="matrix(0.5 -0.866 0.866 0.5 106.1851 421.28)" class="single-text">{{ $strings[2]}}</text>
<text transform="matrix(0.5 -0.866 0.866 0.5 149.896 421.28)" class="single-text">{{ $strings[3]}}</text>
<text transform="matrix(0.5 -0.866 0.866 0.5 193.6072 421.28)" class="single-text">{{ $strings[4]}}</text>
<text transform="matrix(0.5 -0.866 0.866 0.5 237.3186 421.28)" class="single-text">{{ $strings[5]}}</text>
<text transform="matrix(0.5 -0.866 0.866 0.5 281.0303 421.28)" class="single-text">{{ $strings[6]}}</text>
<text transform="matrix(0.5 -0.866 0.866 0.5 324.7415 421.28)" class="single-text">{{ $strings[7]}}</text>
<text transform="matrix(0.5 -0.866 0.866 0.5 368.4532 421.28)" class="single-text">{{ $strings[8]}}</text>
<text transform="matrix(0.4776 -0.9734 0.8271 0.562 412.1628 428.0006)" class="single-text">{{ $strings[9]}}</text>
<text transform="matrix(0.4776 -0.9734 0.8271 0.562 459.875 428.0006)" class="single-text">{{ $strings[10]}}</text>
<text transform="matrix(0.4776 -0.9734 0.8271 0.562 507.5873 428.0006)" class="single-text">{{ $strings[11]}}</text>
<path class="single-line" d="M41,168.4c15.4,11.9,26.4,60.5,108.1,67.3c3.9,0.3,42.6,3.9,92.4-34.8c43.4-33.7,74.6-62.7,117.6-96.2
	c82.2-58.4,139.2-81.2,171-50.3"/>
</svg>
<div class="flex flex-wrap items-center justify-center my-4 graph-footer">
  <div class="flex-none m-2 lg:m-4 single-label label"><span class="inline-block w-6 h-6 mr-2 align-middle rounded-md bg-darkblue"></span> <span class="inline-block text-base align-middle">Simplr Specialist Available</span></div>
  <div class="flex-none m-2 lg:m-4 single-label label"><span class="inline-block w-6 h-6 mr-2 align-middle rounded-md bg-bluegray"></span> <span class="inline-block text-base align-middle">Customer Question</span></div>
</div>
</div>