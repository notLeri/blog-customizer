import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import {
	defaultArticleState,
	ArticleStateType,
} from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [styleParams, setStyleParams] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': styleParams.fontFamilyOption.value,
					'--font-size': styleParams.fontSizeOption.value,
					'--font-color': styleParams.fontColor.value,
					'--container-width': styleParams.contentWidth.value,
					'--bg-color': styleParams.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				styleParams={styleParams}
				setStyleParams={setStyleParams}
			/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
