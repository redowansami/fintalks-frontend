import React, { useRef } from 'react';
import { UserCard } from '../components/UserCard';
import { UserSearchFilter } from '../containers/UserSearchFilter';
import { Typography } from '../components/Typography';
import { Spinner } from '../components/Spinner';
import { ErrorDialog } from '../components/ErrorComponents/ErrorDialog';
import { Button } from '../components/Buttons/Button';
import { useGetAllUsers } from '../hooks/useGetAllUsers';
import { useDebounce } from '../hooks/useDebounce';
import { DEFAULT_USER_FILTER, type FilterOption } from '../constants/userFilterConstants';
import '../styles/pages/ViewAllUsers.css';

export const ViewAllUsers: React.FC = () => {
	const headerRef = useRef<HTMLDivElement>(null);
	const { users, currentPage, totalPages, loading, error, setPage, setSearch, setOrderBy } =
		useGetAllUsers();
	const [searchInputValue, setSearchInputValue] = React.useState('');
	const [filterValue, setFilterValue] = React.useState<FilterOption>(DEFAULT_USER_FILTER);

	const debouncedSearchValue = useDebounce(searchInputValue, 300);

	React.useEffect(() => {
		setSearch(debouncedSearchValue);
	}, [debouncedSearchValue, setSearch]);

	const handleSearchChange = (value: string) => {
		setSearchInputValue(value);
	};

	const handleFilterChange = (value: FilterOption) => {
		setFilterValue(value);
		setOrderBy(value);
	};

	const handlePageChange = (newPage: number) => {
		if (newPage > 0 && newPage <= totalPages) {
			setPage(newPage);
			headerRef.current?.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const renderPaginationButtons = () => {
		const buttons = [];
		const maxVisiblePages = 5;
		let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
		const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

		if (endPage - startPage < maxVisiblePages - 1) {
			startPage = Math.max(1, endPage - maxVisiblePages + 1);
		}

		buttons.push(
			<Button
				key="prev"
				variant="box"
				onClick={() => handlePageChange(currentPage - 1)}
				disabled={currentPage === 1}
			>
				Previous
			</Button>,
		);

		for (let i = startPage; i <= endPage; i++) {
			buttons.push(
				<Button
					key={i}
					variant="box"
					className={i === currentPage ? 'active' : ''}
					onClick={() => handlePageChange(i)}
				>
					{i}
				</Button>,
			);
		}

		buttons.push(
			<Button
				key="next"
				variant="box"
				onClick={() => handlePageChange(currentPage + 1)}
				disabled={currentPage === totalPages}
			>
				Next
			</Button>,
		);

		return buttons;
	};

	return (
		<div className="view-all-users">
			<div className="view-all-users--header" ref={headerRef}>
				<div className="view-all-users--header-top">
					<div>
						<Typography variant="h1">All Users</Typography>
						<Typography variant="body" color="muted">
							Browse all users on the platform
						</Typography>
					</div>
					<UserSearchFilter
						searchValue={searchInputValue}
						onSearchChange={handleSearchChange}
						filterValue={filterValue}
						onFilterChange={handleFilterChange}
					/>
				</div>
			</div>

			{error && <ErrorDialog message={error.message || 'Failed to load users'} />}

			{loading ? (
				<Spinner />
			) : users.length > 0 ? (
				<>
					<div className="view-all-users--grid">
						{users.map((user) => (
							<UserCard key={user.userId} user={user} />
						))}
					</div>

					<div className="view-all-users--pagination">
						<div className="pagination">{renderPaginationButtons()}</div>
						<Typography variant="muted" className="view-all-users--page-info">
							Page {currentPage} of {totalPages}
						</Typography>
					</div>
				</>
			) : (
				<Typography variant="body">No users found</Typography>
			)}
		</div>
	);
};
