/* eslint-disable */
import type { AnySelector, Selectors } from './selectors'

export type Conditions = {
	"_hover": string
	"_focus": string
	"_focusWithin": string
	"_focusVisible": string
	"_disabled": string
	"_active": string
	"_visited": string
	"_target": string
	"_readOnly": string
	"_readWrite": string
	"_empty": string
	"_checked": string
	"_enabled": string
	"_expanded": string
	"_highlighted": string
	"_before": string
	"_after": string
	"_firstLetter": string
	"_firstLine": string
	"_marker": string
	"_selection": string
	"_file": string
	"_backdrop": string
	"_first": string
	"_last": string
	"_only": string
	"_even": string
	"_odd": string
	"_firstOfType": string
	"_lastOfType": string
	"_onlyOfType": string
	"_peerFocus": string
	"_peerHover": string
	"_peerActive": string
	"_peerFocusWithin": string
	"_peerFocusVisible": string
	"_peerDisabled": string
	"_peerChecked": string
	"_peerInvalid": string
	"_peerExpanded": string
	"_peerPlaceholderShown": string
	"_groupFocus": string
	"_groupHover": string
	"_groupActive": string
	"_groupFocusWithin": string
	"_groupFocusVisible": string
	"_groupDisabled": string
	"_groupChecked": string
	"_groupExpanded": string
	"_groupInvalid": string
	"_indeterminate": string
	"_required": string
	"_valid": string
	"_invalid": string
	"_autofill": string
	"_inRange": string
	"_outOfRange": string
	"_placeholder": string
	"_placeholderShown": string
	"_pressed": string
	"_selected": string
	"_default": string
	"_optional": string
	"_open": string
	"_fullscreen": string
	"_loading": string
	"_currentPage": string
	"_currentStep": string
	"_motionReduce": string
	"_motionSafe": string
	"_print": string
	"_landscape": string
	"_portrait": string
	"_dark": string
	"_light": string
	"_osDark": string
	"_osLight": string
	"_highConstrast": string
	"_lessContrast": string
	"_moreContrast": string
	"_ltr": string
	"_rtl": string
	"_scrollbar": string
	"_scrollbarThumb": string
	"_scrollbarTrack": string
	"_horizontal": string
	"_vertical": string
	"_typeNumber": string
	"_placeholder_parent": string
	"_spinButtons": string
	"_data_state_active": string
	"_data_state_open": string
	"_data_state_open_child": string
	"_data_state_closed": string
	"_data_swipe_move": string
	"_data_swipe_cancel": string
	"_data_swipe_end": string
	"_data_state_checked": string
	"bp300": string
	"bp300Only": string
	"bp300Down": string
	"bp400": string
	"bp400Only": string
	"bp400Down": string
	"bp500": string
	"bp500Only": string
	"bp500Down": string
	"sm": string
	"smOnly": string
	"smDown": string
	"bp600": string
	"bp600Only": string
	"bp600Down": string
	"bp700": string
	"bp700Only": string
	"bp700Down": string
	"bp800": string
	"bp800Only": string
	"bp800Down": string
	"md": string
	"mdOnly": string
	"mdDown": string
	"bp900": string
	"bp900Only": string
	"bp900Down": string
	"bp1000": string
	"bp1000Only": string
	"bp1000Down": string
	"bp1100": string
	"bp1100Only": string
	"bp1100Down": string
	"lg": string
	"lgOnly": string
	"lgDown": string
	"bp1200": string
	"bp1200Only": string
	"bp1200Down": string
	"bp1300": string
	"bp1300Only": string
	"bp1300Down": string
	"xl": string
	"xlOnly": string
	"xlDown": string
	"bp1400": string
	"bp1400Only": string
	"bp1400Down": string
	"bp1500": string
	"bp1500Only": string
	"bp1500Down": string
	"2xl": string
	"2xlOnly": string
	"bp300ToBp400": string
	"bp300ToBp500": string
	"bp300ToSm": string
	"bp300ToBp600": string
	"bp300ToBp700": string
	"bp300ToBp800": string
	"bp300ToMd": string
	"bp300ToBp900": string
	"bp300ToBp1000": string
	"bp300ToBp1100": string
	"bp300ToLg": string
	"bp300ToBp1200": string
	"bp300ToBp1300": string
	"bp300ToXl": string
	"bp300ToBp1400": string
	"bp300ToBp1500": string
	"bp300To2xl": string
	"bp400ToBp500": string
	"bp400ToSm": string
	"bp400ToBp600": string
	"bp400ToBp700": string
	"bp400ToBp800": string
	"bp400ToMd": string
	"bp400ToBp900": string
	"bp400ToBp1000": string
	"bp400ToBp1100": string
	"bp400ToLg": string
	"bp400ToBp1200": string
	"bp400ToBp1300": string
	"bp400ToXl": string
	"bp400ToBp1400": string
	"bp400ToBp1500": string
	"bp400To2xl": string
	"bp500ToSm": string
	"bp500ToBp600": string
	"bp500ToBp700": string
	"bp500ToBp800": string
	"bp500ToMd": string
	"bp500ToBp900": string
	"bp500ToBp1000": string
	"bp500ToBp1100": string
	"bp500ToLg": string
	"bp500ToBp1200": string
	"bp500ToBp1300": string
	"bp500ToXl": string
	"bp500ToBp1400": string
	"bp500ToBp1500": string
	"bp500To2xl": string
	"smToBp600": string
	"smToBp700": string
	"smToBp800": string
	"smToMd": string
	"smToBp900": string
	"smToBp1000": string
	"smToBp1100": string
	"smToLg": string
	"smToBp1200": string
	"smToBp1300": string
	"smToXl": string
	"smToBp1400": string
	"smToBp1500": string
	"smTo2xl": string
	"bp600ToBp700": string
	"bp600ToBp800": string
	"bp600ToMd": string
	"bp600ToBp900": string
	"bp600ToBp1000": string
	"bp600ToBp1100": string
	"bp600ToLg": string
	"bp600ToBp1200": string
	"bp600ToBp1300": string
	"bp600ToXl": string
	"bp600ToBp1400": string
	"bp600ToBp1500": string
	"bp600To2xl": string
	"bp700ToBp800": string
	"bp700ToMd": string
	"bp700ToBp900": string
	"bp700ToBp1000": string
	"bp700ToBp1100": string
	"bp700ToLg": string
	"bp700ToBp1200": string
	"bp700ToBp1300": string
	"bp700ToXl": string
	"bp700ToBp1400": string
	"bp700ToBp1500": string
	"bp700To2xl": string
	"bp800ToMd": string
	"bp800ToBp900": string
	"bp800ToBp1000": string
	"bp800ToBp1100": string
	"bp800ToLg": string
	"bp800ToBp1200": string
	"bp800ToBp1300": string
	"bp800ToXl": string
	"bp800ToBp1400": string
	"bp800ToBp1500": string
	"bp800To2xl": string
	"mdToBp900": string
	"mdToBp1000": string
	"mdToBp1100": string
	"mdToLg": string
	"mdToBp1200": string
	"mdToBp1300": string
	"mdToXl": string
	"mdToBp1400": string
	"mdToBp1500": string
	"mdTo2xl": string
	"bp900ToBp1000": string
	"bp900ToBp1100": string
	"bp900ToLg": string
	"bp900ToBp1200": string
	"bp900ToBp1300": string
	"bp900ToXl": string
	"bp900ToBp1400": string
	"bp900ToBp1500": string
	"bp900To2xl": string
	"bp1000ToBp1100": string
	"bp1000ToLg": string
	"bp1000ToBp1200": string
	"bp1000ToBp1300": string
	"bp1000ToXl": string
	"bp1000ToBp1400": string
	"bp1000ToBp1500": string
	"bp1000To2xl": string
	"bp1100ToLg": string
	"bp1100ToBp1200": string
	"bp1100ToBp1300": string
	"bp1100ToXl": string
	"bp1100ToBp1400": string
	"bp1100ToBp1500": string
	"bp1100To2xl": string
	"lgToBp1200": string
	"lgToBp1300": string
	"lgToXl": string
	"lgToBp1400": string
	"lgToBp1500": string
	"lgTo2xl": string
	"bp1200ToBp1300": string
	"bp1200ToXl": string
	"bp1200ToBp1400": string
	"bp1200ToBp1500": string
	"bp1200To2xl": string
	"bp1300ToXl": string
	"bp1300ToBp1400": string
	"bp1300ToBp1500": string
	"bp1300To2xl": string
	"xlToBp1400": string
	"xlToBp1500": string
	"xlTo2xl": string
	"bp1400ToBp1500": string
	"bp1400To2xl": string
	"bp1500To2xl": string
	"base": string
}

export type Condition = keyof Conditions

export type Conditional<V> =
  | V
  | Array<V | null>
  | {
      [K in keyof Conditions]?: Conditional<V>
    }

export type ConditionalValue<T> = Conditional<T>

export type Nested<P> = P & {
  [K in Selectors]?: Nested<P>
} & {
  [K in AnySelector]?: Nested<P>
} & {
  [K in keyof Conditions]?: Nested<P>
}
