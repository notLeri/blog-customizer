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
	const [currentStyleParams, setCurrentStyleParams] =
		useState<ArticleStateType>(defaultArticleState);

	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': currentStyleParams.fontFamilyOption.value,
					'--font-size': currentStyleParams.fontSizeOption.value,
					'--font-color': currentStyleParams.fontColor.value,
					'--container-width': currentStyleParams.contentWidth.value,
					'--bg-color': currentStyleParams.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm setCurrentStyleParams={setCurrentStyleParams} />
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
