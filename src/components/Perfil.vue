<template>	
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xs-offset-0 col-sm-offset-0 col-md-offset-5 col-lg-offset-5 toppad">				
				<div class="panel panel-info">
					<div class="panel-heading">
						<h3 class="panel-title">{{usuario.usuario}}</h3>
					</div>
					<div class="panel-body">
						<div class="row">
							<div class="col-md-3 col-lg-3 " align="center">
								<img alt="User Pic" src="/static/img/producto.jpg" class="img-circle img-responsive" width="100"> </div>

								<div class=" col-md-9 col-lg-9 "> 
									<table class="table table-user-information">
										<tbody>
											<tr>
												<td>Nombre:</td>
												<td>{{usuario.nombre}}</td>
											</tr>
											<tr>
												<td>Apellidos:</td>
												<td>{{usuario.apellidos}}</td>
											</tr>
											<tr>
												<td>Correo electrónico</td>
												<td>{{usuario.email}}</td>
											</tr>
											<tr>												
												<tr>
													<td>Dirección envío</td>
													<td>
														{{usuario.calle}} #{{usuario.num_ext}}, {{usuario.colonia}}, {{usuario.municipio.municipio}}
														,{{usuario.estado.estado}}, CP {{usuario.cp}}
													</td>
												</tr>												
												<td>RFC</td>
												<td>{{usuario.rfc}}
												</td>

											</tr>

										</tbody>
									</table>
									<div class="btn-group" role="group" aria-label="Basic example">
										<button type="button" class="btn btn-primary">Mis pedidos</button>
										<button type="button" class="btn btn-secondary">Editar perfil</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</template>

	<script>
	export default {

		name: 'Perfil',

		data () {
			return {
				usuario: this.$store.getters.usuario
			}
		}
	}
	</script>

	<style lang="css" scoped>
	.user-row {
		margin-bottom: 14px;
	}

	.user-row:last-child {
		margin-bottom: 0;
	}

	.dropdown-user {
		margin: 13px 0;
		padding: 5px;
		height: 100%;
	}

	.dropdown-user:hover {
		cursor: pointer;
	}

	.table-user-information > tbody > tr {
		border-top: 1px solid rgb(221, 221, 221);
	}

	.table-user-information > tbody > tr:first-child {
		border-top: 0;
	}


	.table-user-information > tbody > tr > td {
		border-top: 0;
	}
	.toppad
	{margin-top:20px;
	}

	</style>