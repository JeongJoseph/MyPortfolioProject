package com.board.service;

import java.util.List;

import javax.annotation.Resource;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.board.dao.Board;
import com.board.dao.BoardDAO;
import com.board.dao.ListNum;
import com.main.dao.menusBar;

@Service
public class BoardServiceImpl implements BoardService{
	private static final Logger logger = LoggerFactory.getLogger(BoardService.class);

	@Resource 
    private BoardDAO boarddao;
	
	@Override
//	public List<Board> getList(ListNum lnum) {
	public List<Board> getList(int page) {
		return boarddao.getBoardList(page);
	}
	@Override
	public Board getBoardDetail(int boardId){
		return boarddao.getBoardDetail(boardId);
	}
	
	@Override
	public void insertBoard (Board board) {
		boarddao.insertBoard (board);
	}
	
	public void deleteBoard(Board board) {
		boarddao.deleteBoard (board);
	}
	
	public int getBoardSize() {
		return boarddao.getBoardSize();
	}
	
	
	
}
