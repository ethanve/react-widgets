(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{146:function(e){e.exports={data:{componentMetadata:{displayName:"SelectList",doclets:{public:!0},composes:null,props:[{name:"data",defaultValue:{value:"[]",computed:!1},doclets:{},type:{name:"array",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>An array of possible values for the SelectList.</p>\n<p><strong>Tip:</strong> When <code class="language-text">data</code> is an array of <code class="language-text">objects</code> consider specifying\n<code class="language-text">textField</code> and <code class="language-text">valueField</code> as well.</p>'}}},{name:"value",defaultValue:{value:"[]",computed:!1},doclets:{},type:{name:"union",value:[{name:"any"},{name:"array"}],raw:null},description:{childMarkdownRemark:{html:"<p>Controls the current value of the SelectList.</p>"}}},{name:"onChange",defaultValue:null,doclets:{},type:{name:"func",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>A callback fired when the current <code class="language-text">value</code> changes.</p>'}}},{name:"onMove",defaultValue:null,doclets:{type:"{function(list: HTMLELement, focusedNode: HTMLElement, focusedItem: any)}"},type:{name:"function(list: HTMLELement, focusedNode: HTMLElement, focusedItem: any)",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>A handler called when focus shifts on the SelectList. Internally this is used to ensure the focused item is in view.\nIf you want to define your own "scrollTo" behavior or just disable the default one specify an <code class="language-text">onMove</code> handler.\nThe handler is called with the relevant DOM nodes needed to implement scroll behavior: the list element,\nthe element that is currently focused, and a focused value.</p>'}}},{name:"multiple",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>Whether or not the SelectList allows multiple selection or not. when <code class="language-text">false</code> the SelectList will\nrender as a list of radio buttons, and checkboxes when <code class="language-text">true</code>.</p>'}}},{name:"onKeyDown",defaultValue:null,doclets:{},type:{name:"func",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>The native <code class="language-text">onKeyDown</code> event, called <code class="language-text">preventDefault</code> will prevent any custom behavior, included keyboard shortcuts.</p>'}}},{name:"onKeyPress",defaultValue:null,doclets:{},type:{name:"func",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>The native <code class="language-text">onKeyPress</code> event, called <code class="language-text">preventDefault</code> will stop any custom behavior.</p>'}}},{name:"itemComponent",defaultValue:null,doclets:{},type:{name:"union",value:["ReactComponent","string"],raw:"CustomPropTypes.elementType"},description:{childMarkdownRemark:{html:"<p>Customize the rendering of each SelectList list item.</p>"}}},{name:"listComponent",defaultValue:{value:"List",computed:!0},doclets:{},type:{name:"union",value:["ReactComponent","string"],raw:"CustomPropTypes.elementType"},description:null},{name:"valueField",defaultValue:null,doclets:{},type:{name:"union",value:["string","(dataItem?) => string"],raw:"CustomPropTypes.accessor"},description:{childMarkdownRemark:{html:'<p>A property name that provides the value of the <code class="language-text">data</code> items.\nThis value is used to uniquely distinigush items from others in the <code class="language-text">data</code> list.</p>\n<p>Generally, <code class="language-text">valueField</code> points to an Id field, or other unique identifier.\nWhen not provided, the referential identity of each data item is used.</p>'}}},{name:"textField",defaultValue:null,doclets:{},type:{name:"union",value:["string","(dataItem?) => string"],raw:"CustomPropTypes.accessor"},description:{childMarkdownRemark:{html:'<p>A property name, or accessor function, that provides the text content of the <code class="language-text">data</code>\nitems. The SelectList will filter data based on this value as well as use it as the\ndefault display value for list items and selected values.</p>'}}},{name:"busy",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Controls the loading/busy spinner visibility. Presentational only! Useful\nfor providing visual feedback while data is being loaded.</p>"}}},{name:"delay",defaultValue:{value:"250",computed:!1},doclets:{},type:{name:"number",value:null,raw:null},description:null},{name:"autoFocus",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:"<p>Pass focus to the SelectList when it mounts.</p>"}}},{name:"disabled",defaultValue:null,doclets:{},type:{name:"union",value:["bool","Array"],raw:"CustomPropTypes.disabled.acceptsArray"},description:null},{name:"readOnly",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:"CustomPropTypes.disabled"},description:{childMarkdownRemark:{html:"<p>Controls the read-only state of the SelectList.</p>"}}},{name:"listProps",defaultValue:null,doclets:{},type:{name:"object",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>An object of props that is passed directly to the underlying <code class="language-text">List</code> component.</p>'}}},{name:"tabIndex",defaultValue:null,doclets:{},type:{name:"any",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>The HTML <code class="language-text">tabindex</code> attribute, controls the order in which focus moves\nvia the TAB key</p>'}}},{name:"name",defaultValue:null,doclets:{},type:{name:"string",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>The HTML <code class="language-text">name</code> attribute used to group checkboxes and radio buttons\ntogether.</p>'}}},{name:"isRtl",defaultValue:null,doclets:{},type:{name:"bool",value:null,raw:null},description:{childMarkdownRemark:{html:'<p>Controls the read direction of the SelectList.</p>\n<p><strong>Tip:</strong> You can also set the direction for all widgets at once, by exposing\n<code class="language-text">isRtl</code> on <a href="https://facebook.github.io/react/docs/context.html">context</a> in a\ncommon parent component, such as your application root.</p>'}}},{name:"messages",defaultValue:null,doclets:{},type:{name:"shape",value:{emptyList:{name:"union",raw:"CustomPropTypes.message",required:!1,value:["string","(props?) => string"]}},raw:null},description:{childMarkdownRemark:{html:'<p>Object hash containing display text and/or text for screen readers.\nUse the <code class="language-text">messages</code> object to localize widget text or provide custom rendering.</p>'}}}],description:{childMarkdownRemark:{frontmatter:{localized:null,shortcuts:[{key:"down arrow",label:"move focus"},{key:"up arrow",label:"move focus"},{key:"home",label:"move focus to first option"},{key:"end",label:"move focus to last option"},{key:"spacebar",label:"toggle focused option"},{key:"ctrl + a",label:"ctoggle select all/select none"},{key:"any key",label:"search list for option starting with key"}]},html:"<p>A group of radio buttons or checkboxes bound to a dataset.</p>"}}}},pageContext:{displayName:"SelectList",publicComponents:["Calendar","Combobox","DateTimePicker","DropdownList","Multiselect","SelectList","NumberPicker"]}}}}]);
//# sourceMappingURL=path---api-select-list-8b2e81bdbe85b1240f4e.js.map