import { mixMembers } from 'stencil-awesome-test';
import { Icofont } from '../../../types/icofont';
import { getIconIcofontHtml } from '../../icon-icofont/test/html.mock';
import { NavLinkProps } from '../../link/component';
import { getLinkHtml } from '../../link/test/html.mock';
import { Props } from '../component';

export const getBreadcrumbHtml = (props: Props): string => {
	props = mixMembers(
		{
			_ariaLabel: '…', // '⚠'
			_links: [],
		},
		props
	);

	const lastIndex = props._links.length - 1;
	let list = '';
	(props._links as NavLinkProps[]).forEach((link, index) => {
		list += `
				<li>
				${
					index !== 0
						? getIconIcofontHtml(
								{
									_ariaLabel: '',
									_icon: 'rounded-right',
									_part: 'separator',
								},
								' exportparts="separator"'
						  )
						: ''
				}
					${
						lastIndex === index
							? `<span>${
									link._iconOnly
										? getIconIcofontHtml({
												_ariaLabel: link._ariaLabel as string,
												_icon: link._icon as Icofont,
										  })
										: (link._label as string)
							  }</span>`
							: getLinkHtml(link)
					}
				</li>
			`;
	});

	return `
<kol-breadcrumb>
  <mock:shadow-root>
		<nav aria-label="${props._ariaLabel}">
			<ul>
				${
					props._links.length === 0
						? `<li>${getIconIcofontHtml({
								_ariaLabel: '',
								_icon: 'home',
						  })}…</li>`
						: ''
				}
				${list}
			</ul>
		</nav>
  </mock:shadow-root>
</kol-breadcrumb>`;
};
