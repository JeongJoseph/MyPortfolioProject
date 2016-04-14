package com.board.service;

import java.util.List;

import com.board.dao.Board;
import com.board.dao.ListNum;

public interface BoardService {

//	public abstract List<Board> getList(ListNum lnum);
	public abstract List<Board> getList(int page);
//	public abstract User checkUserID(String username);

	public abstract Board getBoardDetail(int boardId);

	public abstract void insertBoard(Board board);
	public abstract void deleteBoard(Board board);
}
