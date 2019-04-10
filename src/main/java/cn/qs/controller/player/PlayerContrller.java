package cn.qs.controller.player;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.commons.collections.MapUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import cn.qs.bean.Player;
import cn.qs.bean.Team;
import cn.qs.bean.User;
import cn.qs.service.player.PlayerService;
import cn.qs.service.team.TeamService;
import cn.qs.utils.DefaultValue;
import cn.qs.utils.JSONResultUtil;
import cn.qs.utils.MD5Util;
import cn.qs.utils.ValidateCheck;

@Controller /** 自动返回的是json格式数据 ***/
@RequestMapping("player")
public class PlayerContrller {

	private static final Logger logger = LoggerFactory.getLogger(PlayerContrller.class);

	@Autowired
	private PlayerService playerService;
	@Autowired
	private TeamService teamService;

	/**
	 * 添加player
	 * 
	 * @param player
	 *            springMVC自动映射的实体
	 * @return
	 */
	@RequestMapping("addPlayer")
	@ResponseBody
	public JSONResultUtil addUser(Player player) {
		player.setPlayerId(MD5Util.createID());
		playerService.addPlayer(player);
		return JSONResultUtil.ok();
	}

	/**
	 * 分页查询user
	 * 
	 * @param condition
	 * @return
	 */
	@RequestMapping("getplayers")
	@ResponseBody
	public PageInfo<Player> getplayers(@RequestParam Map condition) {
		int pageNum = 1;
		if (ValidateCheck.isNotNull(MapUtils.getString(condition, "pageNum"))) { // 如果不为空的话改变当前页号
			pageNum = Integer.parseInt(MapUtils.getString(condition, "pageNum"));
		}
		int pageSize = DefaultValue.PAGE_SIZE;
		if (ValidateCheck.isNotNull(MapUtils.getString(condition, "pageSize"))) { // 如果不为空的话改变当前页大小
			pageSize = Integer.parseInt(MapUtils.getString(condition, "pageSize"));
		}
		// 开始分页
		PageHelper.startPage(pageNum, pageSize);
		List<Player> players = new ArrayList<Player>();
		System.out.println("获取球员信息："+(String)condition.get("name"));
		try {
			players = playerService.selectPlayerDetail(condition);
		} catch (Exception e) {
			logger.error("getUsers error！", e);
		}
		PageInfo<Player> pageInfo = new PageInfo<Player>(players);
		return pageInfo;
	}

	/**
	 * 删除user
	 * 
	 * @param user
	 *            springMVC自动映射的实体
	 * @return
	 */
	@RequestMapping("deletePlayer")
	@ResponseBody
	public JSONResultUtil deletePlayer(String playerId) {
		System.out.println("删除球员id:"+playerId);
		playerService.deletePlayer(playerId);
		return JSONResultUtil.ok();
	}

	/**
	 * 跳转打修改用户页面
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping("updatePlayer")
	public String updatePlayer(String playerId, ModelMap map) {
		Map map1 = new HashMap();
		map1.put("playerId", playerId);
		List<Player> players = playerService.selectPlayerDetail(map1);
		List<Team> teams = teamService.findAllTeam();
		Player player = players.get(0);
		map.addAttribute("player", player);
		map.addAttribute("teams", teams);
//		System.out.println("修改用户id:"+userId);
		return "updatePlayer";
	}

	/**
	 * 添加user
	 * 
	 * @param user
	 *            springMVC自动映射的实体
	 * @return
	 */
	@RequestMapping("doUpdatePlayer")
	@ResponseBody
	public JSONResultUtil doUpdateUser(Player player) {
		playerService.updatePlayer(player);
		return JSONResultUtil.ok();
	}
	
}