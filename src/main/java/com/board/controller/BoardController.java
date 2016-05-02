package com.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.board.dao.Board;
import com.board.dao.ListNum;
import com.board.service.BoardService;

@Controller
public class BoardController {

	@Autowired
	BoardService boardService;
	
	@RequestMapping(value = "/boardList")
	public String boardList() {
		return "board/list";
	}
	@RequestMapping(value = "/boardInsert")
	public String boardInsert() {
		return "board/insert";
	}
	@RequestMapping(value = "/boardUpdate")
	public String boardUpdate() {
		return "board/update";
	}
	@RequestMapping(value = "/boardDelete")
	public String boardDelete() {
		return "board/delete";
	}
	@RequestMapping(value = "/boardDetail")
	public String boardDetail() {
		System.out.println(3333);
		return "board/detail";
	}

	@RequestMapping( value="/getBoardList", method = RequestMethod.POST, produces = "application/json")
//	public @ResponseBody List<Board> getBoardList(@RequestBody ListNum lnum) {
	public @ResponseBody List<Board> getBoardList(@RequestBody int page) {
		return boardService.getList(page);
	}
	
	@RequestMapping( value="/getBoardDetail", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody Board getBoardDetail(@RequestBody int boardId) {
		return boardService.getBoardDetail(boardId);
	}
	
	@RequestMapping( value="/boardInsert", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody void boardInsert(@RequestBody Board board) {
		boardService.insertBoard(board);
	}
	
	@RequestMapping( value="/boardDelete", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody void boardDelete(@RequestBody Board board) {
		boardService.deleteBoard(board);
	}
	@RequestMapping( value="/getBoardSize", method = RequestMethod.POST, produces = "application/json")
	public @ResponseBody int getBoardSize() {
		return boardService.getBoardSize();
	}
	
	
	
}
