package com.board.dao;

import java.util.List;

public interface BoardDAO {
	public abstract List<Board> getBoardList(int page);
//	public abstract List<Board> getBoardList(ListNum lnum);
	// public abstract List<User> list(User user); 
	public abstract Board getBoardDetail(int boardId);
	public abstract void insertBoard(Board board);
	public abstract void deleteBoard (Board board);
	public abstract int getBoardSize ();
	
}
