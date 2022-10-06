import { KoliBri } from '@public-ui/schema';

// Bundeszentralamt für Steuern
export const BZST = KoliBri.createTheme('bzst', {
	'KOL-BADGE':
		':host {display: inline-block;}span {align-items: center;border-radius: 0.3125rem;display: flex;line-height: 1.25rem;gap: 0.5rem;padding: 0.25rem 0.75rem;}',
	'KOL-BUTTON':
		':host {display: inline-block;} /*-----------*/button {border-width: 1px;border-style: solid;min-width: 44px;min-height: 44px;display: grid;gap: 0.25em;line-height: 1.5rem;font-family: var(--font-family);font-weight: 700;cursor: pointer;font-size: var(--font-size);align-items: center;padding: 8px 14px;justify-content: center;font-style: normal;text-align: center;text-transform: uppercase;width: inherit;transition-duration: 0.5s;transition-property: background-color, color, border-color;}button:hover:enabled {text-decoration: underline;}button.primary,button.primary:active,button.primary:hover {background-color: var(--color-gruen-dunkel);border-color: var(--color-gruen-dunkel);color: var(--color-weiss);}button.secondary,button.danger,button.normal,button.ghost {background-color: var(--color-weiss);border-color: var(--color-gruen-hell);color: var(--color-grau-dunkel);}button.secondary:active,button.secondary:hover {background-color: var(--color-gruen-dunkel);border-color: var(--color-gruen-dunkel);border-width: 1px;color: var(--color-weiss);}button:disabled,button:disabled:hover {background-color: var(--color-weiss);border-color: var(--color-grau-hell);color: var(--color-graublau);cursor: not-allowed;}button > span {display: flex;gap: 0.5em;margin: auto;align-items: center;justify-content: center;}button.icon-only {padding: 8px;}button.icon-only kol-icon {display: inline-block;width: 1.5em;height: 1.5em;}button.loading kol-icon {animation: spin 5s infinite linear;}',
	GLOBAL:
		':host {/* Primärfarbe und Abstufungen */--color-gruen-dunkel: #23614e;--color-gruen: #4d7f6f;--color-gruen-hell: #a7c0b8; /* Sekundärfarben */--color-weiss: #fff;--color-grau-dunkel: #333;--color-grau-hell: #ebebeb;--color-grau-weiss: #f2f2f2; /* Textfarben */--color-graublau: #595f73; /* Signalfarben */--color-blau: #126dff;--color-blau-dunkel: #007194;--color-gelb: #ffe695;--color-rot: #d00000;--color-disabled: #595f73;--font-family: BundesSans Web, Calibri, Verdana, Arial, Helvetica, sans-serif;--font-size: 10px;--line-height: 19px;}:host {font-size: var(--font-size);line-height: var(--line-height);}:host * {box-sizing: border-box;font-family: var(--font-family);}:host h1,:host h2,:host h3,:host h4,:host h5,:host h6 {margin: 0;}a,button,input,option,select,summary,textarea {-ms-hyphens: auto;-webkit-hyphens: auto;hyphens: auto;letter-spacing: inherit;word-break: break-word;}a:focus,button:focus,input:focus,select:focus,summary:focus,textarea:focus {outline-color: var(--color-blau);outline-offset: 2px;outline-style: solid;outline-width: 2px;}input,select,textarea {font-family: var(--font-family);background-color: transparent;box-sizing: border-box;font-size: 1rem;display: inline-flex;border-color: var(--color-gruen-dunkel) !important;border-width: 1px;border-style: solid;padding: 0.625em 0.875em;border-radius: 0px;overflow: hidden;width: 100%;}input::placeholder {color: var(--color-graublau);}kol-input {color: var(--color-grau-dunkel);}kol-input:hover {color: var(--color-grau-dunkel);}kol-input label,legend {color: var(--color-grau-dunkel);font-weight: bold;}kol-input:not(.disabled):hover input,kol-input:not(.disabled):hover select {box-shadow: 1px 1px 0 var(--color-gruen-dunkel),-1px -1px 0 var(--color-gruen-dunkel), 1px -1px 0 var(--color-gruen-dunkel),-1px 1px 0 var(--color-gruen-dunkel);}.disabled input,.disabled textarea,input:read-only,textarea:read-only {background-color: var(--color-grau-weiss);border-color: var(--color-grau-hell);color: var(--color-graublau);cursor: not-allowed;}',
	'KOL-HEADING':
		'h1,h2,h3,h4 {color: var(--color-grau-dunkel);}h1,h2 {font-weight: normal;}h3,h4 {font-weight: bold;}h1 {font-size: 4rem;line-height: 4.5rem;}h2 {font-size: 3.2rem;line-height: 3.7rem;}h3 {font-size: 2.1rem;line-height: 2.7rem;}h4 {font-size: 1.8rem;line-height: 2.7rem;}',
	'KOL-INDENTED-TEXT': ':host > div {width: 100%;padding: 15px;background: var(--color-grau-weiss);box-shadow: -4px 0px 0px var(--color-gruen);}',
	'KOL-INPUT-TEXT':
		'kol-input {display: grid;}kol-input label {display: grid;font-size: 18px;margin-bottom: 10px;order: 2;}kol-input div.input {box-sizing: border-box;order: 3;background-color: white;border-radius: 0px;}kol-input kol-alert.error {margin-bottom: 0.4em;order: 1;}input,select:not([multiple]) {height: 2.75em;}.required label > span::after {content: "*";padding-left: 0.125em;}.icons {display: flex;justify-content: space-between;height: 0;}.icons > * {margin: 0.75em;}.icon-left input,.icon-left select {padding-left: 2em;}.icon-right input,.icon-right select {padding-right: 2em;}kol-input.error input {border-color: var(--color-rot);padding-left: 1em;}kol-input.error input:focus,kol-input.error select:focus,kol-input.error textarea:focus {outline-color: var(--color-blau) !important;}kol-input.error kol-alert.error {color: var(--color-red);font-weight: 700;}kol-button-wc {position: relative;float: right;z-index: 1000;margin-top: -33px;}kol-button-wc button {border: 1px solid var(--kolibri-border-color);border-radius: 0.25rem;box-sizing: border-box;background-color: transparent;cursor: pointer;}.icon-right kol-button-wc {margin-right: 2.5em;}select[multiple],textarea {overflow: auto;}textarea {display: block;}select option {margin: 1px 0;padding: 0.5em;border-radius: 0.25em;cursor: pointer;}select option:disabled {cursor: not-allowed;}option:active:not(:disabled),option:checked:not(:disabled),option:focus:not(:disabled),option:hover:not(:disabled) {background: var(--color-ocean);color: white;}',
	'KOL-INPUT-COLOR':
		'kol-input {display: grid;}kol-input label {display: grid;font-size: 18px;margin-bottom: 10px;order: 2;}kol-input div.input {box-sizing: border-box;order: 3;background-color: white;border-radius: 0px;}kol-input kol-alert.error {margin-bottom: 0.4em;order: 1;}input,select:not([multiple]) {height: 2.75em;}.required label > span::after {content: "*";padding-left: 0.125em;}.icons {display: flex;justify-content: space-between;height: 0;}.icons > * {margin: 0.75em;}.icon-left input,.icon-left select {padding-left: 2em;}.icon-right input,.icon-right select {padding-right: 2em;}kol-input.error input {border-color: var(--color-rot);padding-left: 1em;}kol-input.error input:focus,kol-input.error select:focus,kol-input.error textarea:focus {outline-color: var(--color-blau) !important;}kol-input.error kol-alert.error {color: var(--color-red);font-weight: 700;}kol-button-wc {position: relative;float: right;z-index: 1000;margin-top: -33px;}kol-button-wc button {border: 1px solid var(--kolibri-border-color);border-radius: 0.25rem;box-sizing: border-box;background-color: transparent;cursor: pointer;}.icon-right kol-button-wc {margin-right: 2.5em;}select[multiple],textarea {overflow: auto;}textarea {display: block;}select option {margin: 1px 0;padding: 0.5em;border-radius: 0.25em;cursor: pointer;}select option:disabled {cursor: not-allowed;}option:active:not(:disabled),option:checked:not(:disabled),option:focus:not(:disabled),option:hover:not(:disabled) {background: var(--color-ocean);color: white;}',
	'KOL-INPUT-FILE':
		'kol-input {display: grid;}kol-input label {display: grid;font-size: 18px;margin-bottom: 10px;order: 2;}kol-input div.input {box-sizing: border-box;order: 3;background-color: white;border-radius: 0px;}kol-input kol-alert.error {margin-bottom: 0.4em;order: 1;}input,select:not([multiple]) {height: 2.75em;}input:not([type="color"]):read-only,input:disabled,select:disabled,textarea:read-only,textarea:disabled {cursor: not-allowed;}.required label > span::after {content: "*";padding-left: 0.125em;}.icons {display: flex;justify-content: space-between;height: 0;}.icons > * {margin: 0.75em;}.icon-left input,.icon-left select {padding-left: 2em;}.icon-right input,.icon-right select {padding-right: 2em;}kol-input.error input {border-color: var(--color-rot);padding-left: 1em;}kol-input.error input:focus,kol-input.error select:focus,kol-input.error textarea:focus {outline-color: var(--color-blau) !important;}kol-input.error kol-alert.error {color: var(--color-red);font-weight: 700;}kol-button-wc {position: relative;float: right;z-index: 1000;margin-top: -33px;}kol-button-wc button {border: 1px solid var(--kolibri-border-color);border-radius: 0.25rem;box-sizing: border-box;background-color: transparent;cursor: pointer;}.icon-right kol-button-wc {margin-right: 2.5em;}select[multiple],textarea {overflow: auto;}textarea {display: block;}select option {margin: 1px 0;padding: 0.5em;border-radius: 0.25em;cursor: pointer;}select option:disabled {cursor: not-allowed;}option:active:not(:disabled),option:checked:not(:disabled),option:focus:not(:disabled),option:hover:not(:disabled) {background: var(--color-ocean);color: white;}',
	'KOL-INPUT-EMAIL':
		'kol-input {display: grid;}kol-input label {display: grid;font-size: 18px;margin-bottom: 10px;order: 2;}kol-input div.input {box-sizing: border-box;order: 3;background-color: white;border-radius: 0px;}kol-input kol-alert.error {margin-bottom: 0.4em;order: 1;}input,select:not([multiple]) {height: 2.75em;}input:not([type="color"]):read-only,input:disabled,select:disabled,textarea:read-only,textarea:disabled {cursor: not-allowed;}.required label > span::after {content: "*";padding-left: 0.125em;}.icons {display: flex;justify-content: space-between;height: 0;}.icons > * {margin: 0.75em;}.icon-left input,.icon-left select {padding-left: 2em;}.icon-right input,.icon-right select {padding-right: 2em;}kol-input.error input {border-color: var(--color-rot);padding-left: 1em;}kol-input.error input:focus,kol-input.error select:focus,kol-input.error textarea:focus {outline-color: var(--color-blau) !important;}kol-input.error kol-alert.error {color: var(--color-red);font-weight: 700;}kol-button-wc {position: relative;float: right;z-index: 1000;margin-top: -33px;}kol-button-wc button {border: 1px solid var(--kolibri-border-color);border-radius: 0.25rem;box-sizing: border-box;background-color: transparent;cursor: pointer;}.icon-right kol-button-wc {margin-right: 2.5em;}select[multiple],textarea {overflow: auto;}textarea {display: block;}select option {margin: 1px 0;padding: 0.5em;border-radius: 0.25em;cursor: pointer;}select option:disabled {cursor: not-allowed;}option:active:not(:disabled),option:checked:not(:disabled),option:focus:not(:disabled),option:hover:not(:disabled) {background: var(--color-ocean);color: white;}',
	'KOL-INPUT-NUMBER':
		'kol-input {display: grid;}kol-input label {display: grid;font-size: 18px;margin-bottom: 10px;order: 2;}kol-input div.input {box-sizing: border-box;order: 3;background-color: white;border-radius: 0px;}kol-input kol-alert.error {margin-bottom: 0.4em;order: 1;}input,select:not([multiple]) {height: 2.75em;}input:not([type="color"]):read-only,input:disabled,select:disabled,textarea:read-only,textarea:disabled {cursor: not-allowed;}.required label > span::after {content: "*";padding-left: 0.125em;}.icons {display: flex;justify-content: space-between;height: 0;}.icons > * {margin: 0.75em;}.icon-left input,.icon-left select {padding-left: 2em;}.icon-right input,.icon-right select {padding-right: 2em;}kol-input.error input {border-color: var(--color-rot);padding-left: 1em;}kol-input.error input:focus,kol-input.error select:focus,kol-input.error textarea:focus {outline-color: var(--color-blau) !important;}kol-input.error kol-alert.error {color: var(--color-red);font-weight: 700;}kol-button-wc {position: relative;float: right;z-index: 1000;margin-top: -33px;}kol-button-wc button {border: 1px solid var(--kolibri-border-color);border-radius: 0.25rem;box-sizing: border-box;background-color: transparent;cursor: pointer;}.icon-right kol-button-wc {margin-right: 2.5em;}select[multiple],textarea {overflow: auto;}textarea {display: block;}select option {margin: 1px 0;padding: 0.5em;border-radius: 0.25em;cursor: pointer;}select option:disabled {cursor: not-allowed;}option:active:not(:disabled),option:checked:not(:disabled),option:focus:not(:disabled),option:hover:not(:disabled) {background: var(--color-ocean);color: white;}',
	'KOL-INPUT-PASSWORD':
		'kol-input {display: grid;}kol-input label {display: grid;font-size: 18px;margin-bottom: 10px;order: 2;}kol-input div.input {box-sizing: border-box;order: 3;background-color: white;border-radius: 0px;}kol-input kol-alert.error {margin-bottom: 0.4em;order: 1;}input,select:not([multiple]) {height: 2.75em;}.required label > span::after {content: "*";padding-left: 0.125em;}.icons {display: flex;justify-content: space-between;height: 0;}.icons > * {margin: 0.75em;}.icon-left input,.icon-left select {padding-left: 2em;}.icon-right input,.icon-right select {padding-right: 2em;}kol-input.error input {border-color: var(--color-rot);padding-left: 1em;}kol-input.error input:focus,kol-input.error select:focus,kol-input.error textarea:focus {outline-color: var(--color-blau) !important;}kol-input.error kol-alert.error {color: var(--color-red);font-weight: 700;}kol-button-wc {position: relative;float: right;z-index: 1000;margin-top: -33px;}kol-button-wc button {border: 1px solid var(--kolibri-border-color);border-radius: 0.25rem;box-sizing: border-box;background-color: transparent;cursor: pointer;}.icon-right kol-button-wc {margin-right: 2.5em;}select[multiple],textarea {overflow: auto;}textarea {display: block;}select option {margin: 1px 0;padding: 0.5em;border-radius: 0.25em;cursor: pointer;}select option:disabled {cursor: not-allowed;}option:active:not(:disabled),option:checked:not(:disabled),option:focus:not(:disabled),option:hover:not(:disabled) {background: var(--color-ocean);color: white;}',
	'KOL-INPUT-RADIO':
		'kol-input {display: grid;}kol-input label {display: grid;font-size: 18px;margin-bottom: 10px;order: 2;}kol-input div.input {box-sizing: border-box;order: 3;background-color: white;border-radius: 0px;}kol-input kol-alert.error {margin-bottom: 0.4em;order: 1;}fieldset {border: 0;}legend {font-size: 18px;margin-bottom: 18px;}fieldset div[slot="input"] {display: flex;}fieldset input {width: auto;}.required label > span::after {content: "*";padding-left: 0.125em;}.icons {display: flex;justify-content: space-between;height: 0;}.icons > * {margin: 0.75em;}.icon-left input,.icon-left select {padding-left: 2em;}.icon-right input,.icon-right select {padding-right: 2em;}kol-input.error input {border-color: var(--color-rot);padding-left: 1em;}kol-input.error input:focus,kol-input.error select:focus,kol-input.error textarea:focus {outline-color: var(--color-blau) !important;}kol-input.error kol-alert.error {color: var(--color-red);font-weight: 700;}kol-input input {appearance: none;-webkit-appearance: none;-moz-appearance: none;background-color: var(--color-weiss);border: 1px solid var(--color-gruen-dunkel) !important;border-radius: 50%;cursor: default !important;height: 10px;width: 10px;padding: 8px;}input[type="radio"]:checked {background-color: var(--color-gruen-dunkel) !important;}',
	'KOL-INPUT-CHECKBOX':
		'kol-input {display: flex;height: 26px;width: 300px;position: relative;}kol-input.error {margin-bottom: 30px;}kol-input label {left: 35px;top: 3px;font-size: 18px;order: 2;position: absolute;}input[type="checkbox"] {appearance: none;-moz-appearance: none;-webkit-appearance: none;background-color: white;border-color: var(--color-gruen-dunkel);order: 3;padding: 10px;position: absolute;left: 0px;width: 20px;cursor: pointer !important;}kol-input.checkbox kol-alert,kol-input.switch kol-alert {position: absolute;top: 31px;left: 4px;}input[type="checkbox"]:checked {background-color: var(--color-gruen-dunkel);}input[type="checkbox"]:indeterminate,input[type="checkbox"]:indeterminate:focus {background-color: var(--color-gruen-dunkel);}input[type="checkbox"]:indeterminate:hover {background-color: var(--color-weiss);}input[type="checkbox"]:disabled:indeterminate:hover {background-color: var(--color-grau-weiss);}input[type="checkbox"]:checked:before {content: "\\2714";color: var(--color-weiss);position: absolute;top: -6px;left: 1px;font-size: 22px;}input[type="checkbox"]:indeterminate:before {content: "-";color: var(--color-weiss);position: absolute;top: -10px;left: 5px;font-size: 32px;transform: rotate(45deg);}input[type="checkbox"]:disabled:indeterminate:before {content: "-";color: var(--color-graublau);position: absolute;top: -10px;left: 5px;font-size: 32px;transform: rotate(45deg);}input[type="checkbox"]:disabled:hover {color: var(--color-graublau);}input[type="checkbox"]:indeterminate:hover::before {color: var(--color-grau-dunkel);}kol-input.disabled input[type="checkbox"] {background-color: var(--color-grau-weiss);border-color: var(--color-grau-hell);cursor: not-allowed !important;color: var(--color-graublau);}',
	'KOL-SELECT':
		'kol-input {display: grid;}kol-input label {display: grid;font-size: 18px;order: 2;margin-bottom: 10px;}kol-input div.input {box-sizing: border-box;order: 3;background-color: var(--color-weiss);border-radius: 0.3125rem;}kol-input kol-alert.error {margin-bottom: 0.4em;order: 1;}input,select,textarea {font-family: var(--font-family);background-color: transparent;border-radius: 0px;box-sizing: border-box;font-size: 1rem;display: inline-flex;line-height: 1.5em;color: var(--default-letter);border-color: var(--color-gruen-dunkel);border-width: 1px;border-style: solid;padding: 0.625em 0.875em;overflow: hidden;width: 100%;}input,select:not([multiple]) {height: 2.75em;}input::placeholder {color: var(--default-border);}kol-input:not(.disabled):hover input,kol-input:not(.disabled):hover select {box-shadow: 1px 1px 0 var(--color-gruen-dunkel),-1px -1px 0 var(--color-gruen-dunkel), 1px -1px 0 var(--color-gruen-dunkel),-1px 1px 0 var(--color-gruen-dunkel);}select:focus {outline-color: var(--color-blau);outline-offset: 2px;outline-style: solid;outline-width: 2px;}input:not([type="color"]):read-only,input:disabled,/* select:read-only, */select:disabled,textarea:read-only,textarea:disabled {cursor: not-allowed;border-color: var(--border-default);}.required label > span::after {content: "*";padding-left: 0.125em;}.icons {display: flex;justify-content: space-between;height: 0;}.icons > * {margin: 0.75em;}.icon-left input,.icon-left select {padding-left: 2em;}.icon-right input,.icon-right select {padding-right: 2em;}kol-input.error {border-left: 3px solid var(--color-red);padding-left: 1em;}kol-input.error input:focus,kol-input.error select:focus,kol-input.error textarea:focus {outline-color: var(--color-blau) !important;}kol-input.error kol-alert.error {color: var(--color-red);font-weight: 700;}kol-button-wc {position: relative;float: right;z-index: 1000;margin-top: -33px;}kol-button-wc button {border: 1px solid var(--kolibri-border-color);border-radius: 0.25rem;box-sizing: border-box;background-color: transparent;cursor: pointer;}.icon-right kol-button-wc {margin-right: 2.5em;}select[multiple],textarea {overflow: auto;}textarea {display: block;}select option {margin: 1px 0;padding: 0.5em;border-radius: 0.25em;cursor: pointer;}select option:disabled {cursor: not-allowed;}select[multiple] {padding: 0px;}select[multiple] option {border-radius: 0px;}select[multiple] option:nth-child(even) {background-color: var(--color-grau-hell);}select[multiple] option:hover,select[multiple] option:checked {background-color: var(--color-gruen-dunkel);color: var(--color-weiss);}select[multiple] option:checked {font-weight: bold;}kol-input.disabled select {background-color: var(--color-grau-hell);border-color: var(--color-grau-weiss);}',
	'KOL-TEXTAREA':
		'kol-input {display: grid;}kol-input label {display: grid;font-size: 18px;margin-bottom: 10px;order: 2;}kol-input div.input {box-sizing: border-box;order: 3;background-color: white;border-radius: 0px;}kol-input kol-alert.error {margin-bottom: 0.4em;order: 1;}input,select:not([multiple]) {height: 2.75em;}.required label > span::after {content: "*";padding-left: 0.125em;}.icons {display: flex;justify-content: space-between;height: 0;}.icons > * {margin: 0.75em;}.icon-left input,.icon-left select {padding-left: 2em;}.icon-right input,.icon-right select {padding-right: 2em;}kol-input.error input {border-color: var(--color-rot);padding-left: 1em;}kol-input.error input:focus,kol-input.error select:focus,kol-input.error textarea:focus {outline-color: var(--color-blau) !important;}kol-input.error kol-alert.error {color: var(--color-red);font-weight: 700;}kol-button-wc {position: relative;float: right;z-index: 1000;margin-top: -33px;}kol-button-wc button {border: 1px solid var(--kolibri-border-color);border-radius: 0.25rem;box-sizing: border-box;background-color: transparent;cursor: pointer;}.icon-right kol-button-wc {margin-right: 2.5em;}textarea {overflow: auto;}textarea {display: block;}.disabled input,input:read-only {background-color: var(--color-grau-weiss);border-color: var(--color-grau-hell);color: var(--color-graublau);cursor: not-allowed;}',
	'KOL-NAV':
		'* {margin: 0;padding: 0;}nav {font-family: var(--font-family);font-size: 18px;background-color: var(--color-grau-hell);}ul {list-style: none;}a {background-color: var(--color-white);text-decoration: none;color: var(--color-dunkel);width: 100%;display: block;font-style: normal;font-weight: 700;padding: 0.75rem 0.5rem 0.75rem 0;border-left-color: var(--color-gruen-dunkel);border-left-style: solid;border-left-width: 0.5rem;line-height: 1.5rem;min-height: 44px;min-width: 44px;transition-duration: 0.5s;transition-property: background-color, color, border-color;}a:hover {border-left-color: var(--color-gruen-dunkel);background-color: var(--color-gruen-hell);color: var(--color-grau-dunkel);}a > kol-icon {display: inline-block;text-align: center;width: 44px;}button {background-color: var(--color-gruen-dunkel);}a[part*="selected"] {background-color: var(--color-ice);border-left-color: var(--color-midnight);color: var(--color-midnight);}.hidden {display: none;}:host > div > div:last-child {margin-top: 0.5em;width: 100%;text-align: center;} /* horizontal */ul.flex {display: flex;}li > div > div.absolute {position: absolute;}',
	'KOL-ACCORDION':
		':host > div {font-family: var(--font-family);padding: 0 0.5rem 0 0;}:host > div > kol-heading-wc {background-color: var(--color-gruen-hell);font-weight: 700;font-size: 1.25rem;line-height: 1.75rem;}:host > div > kol-heading-wc button {cursor: pointer;width: 100%;margin: 0;display: flex;gap: 0.5em;border: 0;align-items: center;overflow: hidden;font-size: inherit;line-height: 1.75em;background-color: transparent;padding: 0.5em;}:host > div[part*="open"] > kol-heading-wc button {padding: 0.5em;}:host > div > kol-heading-wc button kol-icon::part(icon) {font-weight: 900;color: var(--color-midnight);}:host > div > kol-heading-wc button kol-icon::part(close)::before {font-family: "Font Awesome 6 Free";content: "\\f077";}:host > div > kol-heading-wc button kol-icon::part(open)::before {font-family: "Font Awesome 6 Free";content: "\\f078";}:host > div {width: 100%;height: 100%;display: grid;}:host > div[part*="open"] div[part="header"],:host > div[part*="open"] div[part="content"] {padding-left: 2em;}:host > div[part*="open"] div[part="content"] {font-size: 18px;line-height: 24px;}button {font-weight: inherit;font-size: inherit;line-height: inherit;}:host > div {background: var(--color-white);}:host > div[part*="open"] {padding-bottom: 1em;}:host > div > [part="header"] {height: 0;}',
});
