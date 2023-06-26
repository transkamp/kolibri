import { Component, Element, h, Host, JSX, Prop, State, Watch } from '@stencil/core';
import { Stringified } from '../../types/common';

import { KoliBriHorizontalIcon } from '../../types/icon';
import { InputTypeOnDefault, InputTypeOnOff, Option } from '../../types/input/types';
import { nonce } from '../../utils/dev.utils';
import { propagateFocus } from '../../utils/reuse';
import { getRenderStates } from '../input/controller';
import { InputRangeController } from './controller';
import { ComponentApi, States } from './types';

/**
 * @slot - Die Beschriftung des Eingabeelements.
 */
@Component({
	tag: 'kol-input-range',
	styleUrls: {
		default: './style.css',
	},
	shadow: true,
})
export class KolInputRange implements ComponentApi {
	@Element() private readonly host?: HTMLKolInputRangeElement;
	private ref?: HTMLInputElement;

	private readonly catchRef = (ref?: HTMLInputElement) => {
		this.ref = ref;
		propagateFocus(this.host, this.ref);
	};

	public render(): JSX.Element {
		const { ariaDescribedBy } = getRenderStates(this.state);
		const hasList = Array.isArray(this.state._list) && this.state._list.length > 0;
		const showExpertSlot = this.state._label === ''; // _label="" or _label
		const showDefaultSlot = this.state._label === '…'; // deprecated: default slot will be removed in v2.0.0
		return (
			<Host class={{ 'hide-label': !!this.state._hideLabel }}>
				<kol-input
					class={{
						range: true,
					}}
					_disabled={this.state._disabled}
					_error={this.state._error}
					_hideLabel={this.state._hideLabel}
					_hint={this.state._hint}
					_icon={this.state._icon}
					_id={this.state._id}
					_touched={this.state._touched}
					onClick={() => this.ref?.focus()}
				>
					<span slot="label">{showExpertSlot ? <slot name="expert"></slot> : showDefaultSlot ? <slot></slot> : this.state._label}</span>
					<input
						ref={this.catchRef}
						title=""
						accessKey={this.state._accessKey}
						aria-describedby={ariaDescribedBy.length > 0 ? ariaDescribedBy.join(' ') : undefined}
						aria-labelledby={`${this.state._id}-label`}
						autoCapitalize="off"
						autoComplete={this.state._autoComplete}
						autoCorrect="off"
						disabled={this.state._disabled}
						id={this.state._id}
						list={hasList ? `${this.state._id}-list` : undefined}
						max={this.state._max}
						min={this.state._min}
						name={this.state._name}
						slot="input"
						spellcheck="false"
						step={this.state._step}
						type="range"
						value={this.state._value as number}
						{...this.controller.onFacade}
					/>
					{hasList && [
						<datalist id={`${this.state._id}-list`}>
							{this.state._list.map((option: Option<number>) => (
								<option value={option.value}></option>
							))}
						</datalist>,
						// <ul class="grid gap-1 text-sm grid-flow-col">
						//   {this.state._list.map((option: InputOption<number>) => (
						//     <li class="border-1">{option.label}</li>
						//   ))}
						// </ul>,
					]}
				</kol-input>
			</Host>
		);
	}

	private readonly controller: InputRangeController;

	/**
	 * Gibt an, mit welcher Tastenkombination man das interaktive Element der Komponente auslösen oder fokussieren kann.
	 */
	@Prop() public _accessKey?: string;

	/**
	 * Gibt an, ob der Screenreader die Meldung aktiv vorlesen soll.
	 */
	@Prop({ mutable: true, reflect: true }) public _alert?: boolean = true;

	/**
	 * Gibt an, ob das Eingabefeld autovervollständigt werden kann.
	 */
	@Prop() public _autoComplete?: InputTypeOnOff;

	/**
	 * Deaktiviert das interaktive Element in der Komponente und erlaubt keine Interaktion mehr damit.
	 */
	@Prop() public _disabled?: boolean;

	/**
	 * Gibt den Text für eine Fehlermeldung an.
	 */
	@Prop() public _error?: string;

	/**
	 * Blendet die Beschriftung (Label) aus und zeigt sie stattdessen mittels eines Tooltips an.
	 */
	@Prop() public _hideLabel?: boolean;

	/**
	 * Gibt den Hinweistext an.
	 */
	@Prop() public _hint?: string = '';

	/**
	 * Setzt die Iconklasse (z.B.: `_icon="codicon codicon-home`).
	 */
	@Prop() public _icon?: Stringified<KoliBriHorizontalIcon>;

	/**
	 * Gibt die interne ID des primären Elements in der Komponente an.
	 */
	@Prop() public _id?: string;

	/**
	 * Setzt die sichtbare oder semantische Beschriftung der Komponente (z.B. Aria-Label, Label, Headline, Caption, Summary usw.).
	 */
	@Prop() public _label!: string;

	/**
	 * Gibt die Liste der Vorschlagswörter an.
	 */
	@Prop() public _list?: Stringified<Option<number>[]>;

	/**
	 * Gibt den größtmöglichen Eingabewert an.
	 */
	@Prop() public _max?: number;

	/**
	 * Gibt den kleinstmöglichen Eingabewert an.
	 */
	@Prop() public _min?: number;

	/**
	 * Gibt den technischen Namen des Eingabefeldes an.
	 */
	@Prop() public _name?: string;

	/**
	 * Gibt die EventCallback-Funktionen für das Input-Event an.
	 */
	@Prop() public _on?: InputTypeOnDefault;

	/**
	 * Gibt die Schrittweite der Wertveränderung an.
	 */
	@Prop() public _step?: number;

	/**
	 * Selector for synchronizing the value with another input element.
	 * @internal
	 */
	@Prop() public _syncValueBySelector?: string;

	/**
	 * Gibt an, welchen Tab-Index das primäre Element in der Komponente hat. (https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex)
	 */
	@Prop() public _tabIndex?: number;

	/**
	 * Gibt an, ob dieses Eingabefeld von Nutzer:innen einmal besucht/berührt wurde.
	 */
	@Prop({ mutable: true, reflect: true }) public _touched?: boolean = false;

	/**
	 * Gibt den Wert des Eingabefeldes an.
	 */
	@Prop() public _value?: number;

	@State() public state: States = {
		_autoComplete: 'off',
		_id: nonce(), // ⚠ required
		_label: '…', // ⚠ required
		_list: [],
	};

	public constructor() {
		this.controller = new InputRangeController(this, 'range', this.host);
	}

	@Watch('_accessKey')
	public validateAccessKey(value?: string): void {
		this.controller.validateAccessKey(value);
	}

	@Watch('_alert')
	public validateAlert(value?: boolean): void {
		this.controller.validateAlert(value);
	}

	@Watch('_autoComplete')
	public validateAutoComplete(value?: InputTypeOnOff): void {
		this.controller.validateAutoComplete(value);
	}

	@Watch('_disabled')
	public validateDisabled(value?: boolean): void {
		this.controller.validateDisabled(value);
	}

	@Watch('_error')
	public validateError(value?: string): void {
		this.controller.validateError(value);
	}

	@Watch('_hideLabel')
	public validateHideLabel(value?: boolean): void {
		this.controller.validateHideLabel(value);
	}

	@Watch('_hint')
	public validateHint(value?: string): void {
		this.controller.validateHint(value);
	}

	@Watch('_icon')
	public validateIcon(value?: Stringified<KoliBriHorizontalIcon>): void {
		this.controller.validateIcon(value);
	}

	@Watch('_id')
	public validateId(value?: string): void {
		this.controller.validateId(value);
	}

	@Watch('_label')
	public validateLabel(value?: string): void {
		this.controller.validateLabel(value);
	}

	@Watch('_list')
	public validateList(value?: Stringified<Option<number>[]>): void {
		this.controller.validateList(value);
	}

	@Watch('_max')
	public validateMax(value?: number): void {
		this.controller.validateMax(value);
	}

	@Watch('_min')
	public validateMin(value?: number): void {
		this.controller.validateMin(value);
	}

	@Watch('_name')
	public validateName(value?: string): void {
		this.controller.validateName(value);
	}

	@Watch('_on')
	public validateOn(value?: InputTypeOnDefault): void {
		this.controller.validateOn(value);
	}

	@Watch('_step')
	public validateStep(value?: number): void {
		this.controller.validateStep(value);
	}

	@Watch('_syncValueBySelector')
	public validateSyncValueBySelector(value?: string): void {
		this.controller.validateSyncValueBySelector(value);
	}

	@Watch('_tabIndex')
	public validateTabIndex(value?: number): void {
		this.controller.validateTabIndex(value);
	}

	@Watch('_touched')
	public validateTouched(value?: boolean): void {
		this.controller.validateTouched(value);
	}

	@Watch('_value')
	public validateValue(value?: number): void {
		this.controller.validateValue(value);
	}

	public componentWillLoad(): void {
		this._alert = this._alert === true;
		this._touched = this._touched === true;
		this.controller.componentWillLoad();
	}
}
