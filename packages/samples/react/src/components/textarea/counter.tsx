import React, { FC } from 'react';
import { KolTextarea } from '@public-ui/react';
import { SampleDescription } from '../SampleDescription';

export const TextareaCounter: FC = () => (
	<>
		<SampleDescription>
			<p>Hier ist ein Beispiel für eine Freitextfeld mit Zeichenzähler.</p>
		</SampleDescription>
		<KolTextarea _hasCounter={true} _label="Textara mit Counter und Hint und Fehler" _error={'oh no'} _hint={'Hinweis'} _touched />
	</>
);
